<template>
  <div>
    <footer class="bg-[#12173e] shadow dark:bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 gap-12 lg:py-12 py-8">
          <div class="col-span-1 lg:ml-0 ml-3">
            <img
              class="w-24 text-white"
              id="logoMain"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Pizzeria Minigolf"
            />
            <p class="text-[#b0b0b8] py-5 lg:ml-0 ml-3">
              Sizi alanında uzman en yakın öğretmene ulaştırarak en verimli şekilde özel ders almanızı sağlar.
            </p>
          </div>
          <div class="col-span-1 lg:ml-0 ml-3">
            <h1 class="text-white text-xl font-semibold">Kullanıcı İşlemleri</h1>
            <div class="flex space-x-20">
              <ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3">
                <li>Kullanım Şartları</li>
                <li>Gizlilik Politikamız</li>
                <li>İade Şartlarımız</li>
                <li>Mesafeli Satış Sözleşmemiz</li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 lg:ml-0 ml-3">
            <h1 class="text-white text-xl font-semibold">Özel Ders İşlemleri</h1>
            <div class="flex space-x-20">
              <ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3">
                <li>Özel Ders Talepleri</li>
                <li>Özel Ders Verme</li>
                <li>Özel Ders Alma</li>
                <li>Online Ders</li>
              </ul>
            </div>
          </div>
           <div class="col-span-1 lg:ml-0 ml-3">
            <h1 class="text-white text-xl font-semibold">Hesap İşlemleri</h1>
            <div class="flex space-x-20">
              <ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3">
                <li>Giriş Yap</li>
                <li>Kayıt Ol</li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="border border-solid border-gray-800" />
        <div class="lg:flex justify-between items-center pt-5 pb-8">
          <div class="text-[#b0b0b8] lg:ml-0 ml-3">
            <h1>
              © 2023 <span class="text-white">Egitiva</span> Tüm hakları saklıdır.
            </h1>
          </div>
          <div>
            <ul class="flex text-white gap-2 lg:ml-0 ml-3 lg:mt-0 mt-3">
              <li>
                <div
                  class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center"
                >
                  <Icon name="gg:facebook" size="20" />
                </div>
              </li>
              <li>
                <div
                  class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center"
                >
                  <Icon name="jam:linkedin" size="20" />
                </div>
              </li>
              <li>
                <div
                  class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center"
                >
                  <Icon name="mdi:twitter" size="20" />
                </div>
              </li>
              <li>
                <div
                  class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center"
                >
                  <Icon name="mdi:youtube" size="20" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
