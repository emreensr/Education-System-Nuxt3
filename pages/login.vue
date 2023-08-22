<script setup>
definePageMeta({
  layout: "main",
});
</script>

<template>
  <div class="bg-[#f8f8f8]">
    <div class="mx-auto max-w-6xl auto lg:pt-20 lg:pb-20 ">
      <div class="grid md:grid-cols-5 grid-cols-1 lg:gap-10 bg-white mx-auto rounded-3xl">
        <div class="col-span-2">
          <img
            src="https://images.freeimages.com/images/large-previews/4ca/maldives-unseen-beauty-1641934.jpg"
            class="md:block h-full w-full object-cover rounded-l-xl hidden"
          />
        </div>
        <div class="col-span-1 md:col-span-3">
          <div class="flex flex-wrap space-x-5 lg:mt-16 pt-8 p-3">
            <div class="flex space-x-2 items-center ">
              <div class="border bg-blue-600 text-white px-4 py-2 rounded-md">
                1
              </div>
              <h1>Kayıt Ol</h1>
            </div>
            <div class="flex space-x-2 items-center text-gray-500">
              <div class="border bg-gray-100 px-4 py-2 rounded-md">2</div>
              <h1 class="">Mesaj</h1>
            </div>
            <div class="flex space-x-2 items-center text-gray-500">
              <div class="border bg-gray-100 px-4 py-2 rounded-md">3</div>
              <h1>Son</h1>
            </div>
          </div>
          <div class="border-b border-gray-300 w-full mt-4 p-3"></div>
          <div class="mt-8 text-gray-500 text-sm lg:p-3 px-3">Adım 1/3</div>
          <h1 class="font-bold text-3xl p-3">Kayıt Ol</h1>
          <div class="flex flex-wrap -mx-3 text-left p-3">
            <div
              class="w-full max-w-full px-3 ml-auto [flex:0_0_auto] md:w-6/12"
            >
              <label
                class="mb-2 ml-1 font-semibold text-md text-slate-700"
                for="Street Name"
                >Ad</label
              >
              <input
                type="text"
                name="Street Name"
                placeholder="Adınız"
                class="mt-2 text-md leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div class="w-full max-w-full mt-2 lg:mt-0 px-3 ml-auto md:w-6/12">
              <label
                class="mb-2 ml-1 font-semibold text-md text-slate-700"
                for="Street No"
                >Soyad</label
              >
              <input
                type="text"
                name="Street No"
                min="01"
                placeholder="Soyadınız"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-md leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div
              class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
            >
              <label
                class="mb-2 ml-1 font-semibold text-md text-slate-700"
                for="Street Name"
                >E-Posta</label
              >
              <input
                type="text"
                name="Street Name"
                placeholder="E-Posta Adresiniz"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-md leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div
              class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
            >
              <label
                class="mb-2 ml-1 font-semibold text-md text-slate-700"
                for="Street No"
                >Şifre</label
              >
              <input
                type="password"
                name="Street No"
                min="01"
                placeholder="Şifre"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-md leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto]">
              <label
                class="mb-2 ml-1 font-semibold text-md text-slate-700"
                for="Street No"
                >Adres</label
              >
              <input
                type="text"
                name="Street No"
                min="01"
                placeholder="Adres"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-md leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div class="flex my-6 pr-3">
            <button
              type="button"
              aria-controls="account"
              next-form-btn=""
              href="javascript:;"
              @click="nextStep"
              class="inline-block px-6 py-4 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-md ease-in tracking-tight shadow-md bg-150 bg-x-25"
            >
              Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
