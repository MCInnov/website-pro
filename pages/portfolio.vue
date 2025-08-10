<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Découvrez une sélection de projets réalisés pour mes clients.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58"
              alt="Interface d'application web"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2023" class="text-gray-500">2023</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Développement Web
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Plateforme E-commerce
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Développement d'une plateforme e-commerce complète avec gestion des stocks et paiements en ligne.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Dashboard d'automatisation"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2023" class="text-gray-500">2023</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Automatisation
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Automatisation des Process
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Mise en place d'une solution d'automatisation complète pour la gestion des leads et du CRM.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd"
              alt="Sécurité informatique"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2023" class="text-gray-500">2023</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                DevSecOps
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <span class="absolute inset-0" />
                Infrastructure Sécurisée
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                Mise en place d'une infrastructure DevSecOps complète pour une startup en croissance.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>