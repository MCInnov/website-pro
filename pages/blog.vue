<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Découvrez mes derniers articles sur le développement web, l'automatisation et la sécurité.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Code sur un écran"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2024-03-16" class="text-gray-500">16 Mars 2024</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Développement
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Les meilleures pratiques en Vue.js
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Découvrez les meilleures pratiques pour développer des applications Vue.js performantes et maintenables.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="Automatisation"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2024-03-15" class="text-gray-500">15 Mars 2024</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Automatisation
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Introduction à n8n
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Guide complet pour débuter avec n8n et automatiser vos premiers workflows.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              alt="Sécurité"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2024-03-14" class="text-gray-500">14 Mars 2024</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Sécurité
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Sécurité dans le DevOps
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Comment intégrer la sécurité dans votre pipeline DevOps sans compromettre la vélocité.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>