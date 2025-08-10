<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-2xl font-heading font-bold text-primary-600">MaxiDev</span>
              <span class="text-2xl font-heading font-bold text-gray-900">Solutions</span>
            </NuxtLink>
          </div>
          
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Accueil
            </NuxtLink>
            <NuxtLink to="/about" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              À Propos
            </NuxtLink>
            <NuxtLink to="/services" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Services
            </NuxtLink>
            <NuxtLink to="/portfolio" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Portfolio
            </NuxtLink>
            <NuxtLink to="/blog" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Blog
            </NuxtLink>
            <NuxtLink to="/contact" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-white mt-auto">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="pt-8">
          <p class="text-center text-sm text-gray-500">
            © {{ new Date().getFullYear() }} MaxiDev Solutions. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>