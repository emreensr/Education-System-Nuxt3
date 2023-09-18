<script setup>
definePageMeta({
  layout: "main",
});
</script>

<template>
  <div>
    <div class="text-center lg:pt-10 pt-8 p-3 space-y-3 lg:pb-12">
      <h1 class="font-semibold text-xl text-blue-700">DERS TALEPLERİ</h1>
      <h1 class="text-3xl font-semibold">Aradığın Öğretmeni Hemen Bul!</h1>
      <p class="text-[#808080]">
        Size en uygun öğretmeni bulmak için hemen ders talebi oluştur ve
        öğretmenlerin seninle iletişime geçmesini bekle!
      </p>
    </div>
    <div class="grid grid-cols-1 gap-5 mx-auto max-w-7xl pt:12 mb-20 px-3">
      <div
        class="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div
          class="relative hidden m-0 md:block w-1/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex justify-between">
            <h6
              class="mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"
            >
              Matematik
            </h6>
            <p class="text-xs">2 saat önce</p>
          </div>
          <h3
            class="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            Emre Ensar
          </h3>
          <div class="flex flex-col md:flex-row gap-3 mb-3">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-blue-600"
              >
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                ></path>
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                ></path>
              </svg>
              <span>Kendi evinde</span>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-blue-600"
              >
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                ></path>
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                ></path>
              </svg>
              <span>Öğretmen evinde</span>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-600"
                viewBox="0 0 576 512"
              >
                <path
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Online</span>
            </div>
          </div>
          <p
            class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            Merhaba, 3.sınıfa giden çoçuğum için kendi evimde ders verecek bir
            öğretmen arıyorum. İstanbul/Tuzla konumunda oturmaktayım.
          </p>
          <div class="flex justify-between items-center">
            <div class="flex w-full gap-3">
                <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white py-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Talep Et
              </button>
              <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white p-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Mesaj Gönder
              </button>
            </div>
            <div class="hidden md:block">
                <p class="text-sm">
                    İstanbul/Tuzla
                </p>
            </div>
        </div>
        </div>
      </div>
      <div
        class="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div
          class="relative hidden m-0 md:block w-1/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex justify-between">
            <h6
              class="mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"
            >
              Matematik
            </h6>
            <p class="text-xs">2 saat önce</p>
          </div>
          <h3
            class="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            Emre Ensar
          </h3>
          <div class="flex flex-col md:flex-row gap-3 mb-3">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-blue-600"
              >
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                ></path>
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                ></path>
              </svg>
              <span>Kendi evinde</span>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-blue-600"
              >
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                ></path>
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                ></path>
              </svg>
              <span>Öğretmen evinde</span>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-600"
                viewBox="0 0 576 512"
              >
                <path
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Online</span>
            </div>
          </div>
          <p
            class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            Merhaba, 3.sınıfa giden çoçuğum için kendi evimde ders verecek bir
            öğretmen arıyorum. İstanbul/Tuzla konumunda oturmaktayım.
          </p>
          <div class="flex justify-between items-center">
            <div class="flex w-full gap-3">
                <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white py-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Talep Et
              </button>
              <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white p-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Mesaj Gönder
              </button>
            </div>
            <div class="hidden md:block">
                <p class="text-sm">
                    İstanbul/Tuzla
                </p>
            </div>
        </div>
        </div>
      </div>
      <div
      class="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative hidden m-0 md:block w-1/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="image"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="p-6">
        <div class="flex justify-between">
          <h6
            class="mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"
          >
            Matematik
          </h6>
          <p class="text-xs">2 saat önce</p>
        </div>
        <h3
          class="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          Emre Ensar
        </h3>
        <div class="flex flex-col md:flex-row gap-3 mb-3">
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5 text-blue-600"
            >
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
              ></path>
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
              ></path>
            </svg>
            <span>Kendi evinde</span>
          </div>
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5 text-blue-600"
            >
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
              ></path>
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
              ></path>
            </svg>
            <span>Öğretmen evinde</span>
          </div>
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-600"
              viewBox="0 0 576 512"
            >
              <path
                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Online</span>
          </div>
        </div>
        <p
          class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
        >
          Merhaba, 3.sınıfa giden çoçuğum için kendi evimde ders verecek bir
          öğretmen arıyorum. İstanbul/Tuzla konumunda oturmaktayım.
        </p>
        <div class="flex justify-between items-center">
            <div class="flex w-full gap-3">
                <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white py-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Talep Et
              </button>
              <button
                class="block w-full md:w-1/3 select-none rounded-lg bg-white p-2.5 md:p-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-blue-700 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20"
                type="button"
                data-ripple-dark="true"
              >
                Mesaj Gönder
              </button>
            </div>
            <div class="hidden md:block">
                <p class="text-sm">
                    İstanbul/Tuzla
                </p>
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
