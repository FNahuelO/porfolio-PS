-- Ejecutar completo en Supabase > SQL Editor

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title_es text not null,
  title_en text not null default '',
  text_es text not null default '',
  text_en text not null default '',
  image_url text,
  link text,
  design text,
  position integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.projects enable row level security;
alter table public.admins enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

drop policy if exists "projects_select" on public.projects;
create policy "projects_select" on public.projects
  for select using (published or public.is_admin());

drop policy if exists "projects_insert" on public.projects;
create policy "projects_insert" on public.projects
  for insert with check (public.is_admin());

drop policy if exists "projects_update" on public.projects;
create policy "projects_update" on public.projects
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "projects_delete" on public.projects;
create policy "projects_delete" on public.projects
  for delete using (public.is_admin());

drop policy if exists "admins_select_self" on public.admins;
create policy "admins_select_self" on public.admins
  for select using (user_id = auth.uid());

-- Imágenes
insert into storage.buckets (id, name, public)
values ('projects', 'projects', true)
on conflict (id) do nothing;

drop policy if exists "project_images_select" on storage.objects;
create policy "project_images_select" on storage.objects
  for select using (bucket_id = 'projects');

drop policy if exists "project_images_insert" on storage.objects;
create policy "project_images_insert" on storage.objects
  for insert with check (bucket_id = 'projects' and public.is_admin());

drop policy if exists "project_images_update" on storage.objects;
create policy "project_images_update" on storage.objects
  for update using (bucket_id = 'projects' and public.is_admin());

drop policy if exists "project_images_delete" on storage.objects;
create policy "project_images_delete" on storage.objects
  for delete using (bucket_id = 'projects' and public.is_admin());

-- Trabajos existentes
insert into public.projects (title_es, title_en, text_es, text_en, image_url, link, design, position)
select * from (values
  (
    'Ceppa - Website',
    'Ceppa - Website',
    'El objetivo principal fue crear una experiencia de usuario intuitiva y atractiva, facilitando la navegación y el acceso a la información para los pacientes. Incorporé elementos visuales calmantes y una estructura clara para transmitir confianza y profesionalismo, optimizando la interacción y satisfacción del usuario.',
    'The main objective was to create an intuitive and attractive user experience, facilitating navigation and access to information for patients. I incorporated calming visual elements and a clear structure to convey confidence and professionalism, optimizing interaction and satisfaction of the user.',
    '/projects/ceppa.png',
    'https://ceppa.com.ar/',
    'https://www.figma.com/design/IMF0TX81fyEBhVfUtARBms/Untitled?node-id=0-1&t=H0M8buu7QVPiAWgs-0',
    0
  ),
  (
    'Marketplace',
    'Marketplace',
    'Estas páginas web facilitan transacciones comerciales, permitiendo a los clientes explorar catálogos de productos, agregar artículos al carrito de compras y finalizar la compra mediante métodos de pago en línea',
    'These web pages facilitate commercial transactions, allowing customers to browse product catalogs, add items to the shopping cart, and check out using online payment methods',
    '/projects/novatrip.png',
    null,
    'https://www.figma.com/design/FgAZO7uKOJzxM7KCjKAnCE/Market-place?node-id=1-3&t=d51fKW8Xf0Oc7jet-0',
    1
  ),
  (
    'Investigacion ux-ui y Rediseño Dia Online',
    'UX-UI Research and Redesign Dia Online',
    'Este proyecto tiene como objetivo principal mejorar la experiencia del usuario (UX) y la interfaz de usuario (UI) de nuestra plataforma de compras en línea, optimizando la navegación, accesibilidad y satisfacción del cliente.',
    'This project''s main objective is to improve the user experience (UX) and user interface (UI) of our online shopping platform, optimizing navigation, accessibility and customer satisfaction.',
    '/projects/dia.png',
    null,
    'https://www.figma.com/design/LqubeW6wzxAVfafmw6QdG5/Investigaci%25C3%25B3n-ux-ui-y-redise%25C3%25B1o-Dia-Online?node-id=0-1&t=vKJTpmTf4LAjviFc-0',
    2
  ),
  (
    'Web App mobile para Agendar Citas de Barbería',
    'Mobile Web App to Schedule Barber Appointments',
    'Con esta app, tanto barberos como clientes disfrutan de una experiencia fluida y conveniente. Los barberos pueden organizar sus horarios, recibir notificaciones de nuevas citas, y gestionar cancelaciones o cambios con facilidad. Los clientes, por su parte, pueden explorar la disponibilidad de su barbero preferido, reservar citas al instante y recibir recordatorios automáticos.',
    'With this app, both barbers and clients enjoy a smooth and convenient experience. Barbers can organize their schedules, receive notifications of new appointments, and manage cancellations or changes with ease. Customers, meanwhile, can explore the availability of their favorite barber, book appointments instantly and receive automatic reminders.',
    '/projects/barber.png',
    null,
    'https://www.figma.com/design/wbWjZJPCE1RmK1ehpjCnGx/Gestionador-de-Citas?node-id=0-1&t=R3rWBMvq1jK3VWnO-0',
    3
  ),
  (
    'Web App Interactiva para Invitación de Casamiento',
    'Interactive Web App for Wedding Invitation',
    'La aplicación permite a los usuarios explorar detalles del evento, confirmar su asistencia y personalizar sus respuestas de manera fácil y divertida. Diseñada con una estética elegante y funcionalidades intuitivas, la web app garantiza una navegación fluida y una interacción enriquecedora para todos los usuarios.',
    'The app allows users to explore event details, RSVP and personalize their responses in an easy and fun way. Designed with elegant aesthetics and intuitive functionalities, the web app ensures smooth navigation and rich interaction for all users.',
    '/projects/boda.png',
    'https://bodacrisyflor.vercel.app/',
    'https://www.figma.com/design/voRBdKLbb0IpDxGmQNpFIW/Invitacion-casamiento?node-id=0-1&t=u9vfuwlmAapyu4DL-0',
    4
  )
) as seed (title_es, title_en, text_es, text_en, image_url, link, design, position)
where not exists (select 1 from public.projects);

-- Después de crear tu usuario en Authentication > Users, darle permisos de admin:
-- insert into public.admins (user_id)
-- select id from auth.users where email = 'tu-email@ejemplo.com';
