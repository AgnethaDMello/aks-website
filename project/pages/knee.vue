<template>
  <div class="bg-yellow">
    <div class="relative">
      <img
        src="running.jpeg"
        alt="Running header image"
        class="h-[30vh] w-[100vw] object-cover"
        style="object-position: center bottom"
      />
      <h1 class="absolute top-1/4 text-white text-5xl ml-[5%] mt-10">
        Knee Services
      </h1>
    </div>
    <div
      class="relative md:flex items-center md:justify-between mx-[5%] mt-[3rem]"
    >
      <div class="md:w-2/3 md:pr-8 pb-4">
        <h2 class="text-yellow-txt text-2xl mb-[5%]">
          What Is The Anterior Cruciate Ligament (ACL)?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
          neque convallis a cras. Arcu cursus euismod quis viverra. Egestas
          egestas fringilla phasellus faucibus scelerisque eleifend. Sed blandit
          libero volutpat sed cras ornare arcu dui vivamus. Vulputate eu
          scelerisque felis imperdiet proin fermentum leo vel. Felis bibendum ut
          tristique et egestas. Ligula ullamcorper malesuada proin libero nunc
          consequat interdum. Egestas erat imperdiet sed euismod nisi porta
          lorem mollis aliquam. Egestas fringilla phasellus faucibus scelerisque
          eleifend donec pretium. Lacus suspendisse faucibus interdum posuere
          lorem ipsum. Massa enim nec dui nunc mattis enim. Felis donec et odio
          pellentesque. Aenean et tortor at risus viverra.
        </p>
      </div>
      <div class="md:w-1/3">
        <img
          src="red knee.png"
          alt="pain on knee"
          class="w-full max-w-md mx-auto"
        />
      </div>
    </div>

    <hr class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-100" />
    <div class="pb-[3rem] mx-[5%]">
      <h2 class="text-yellow-txt text-2xl mb-[2rem]">How we can help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Gravida neque
        convallis a cras. Arcu cursus euismod quis viverra. Egestas egestas
        fringilla phasellus faucibus scelerisque eleifend. Sed blandit libero
        volutpat sed cras ornare arcu dui vivamus. Vulputate eu scelerisque
        felis imperdiet proin fermentum leo vel. Felis bibendum ut tristique et
        egestas. Ligula ullamcorper malesuada proin libero nunc consequat
        interdum. Egestas erat imperdiet sed euismod nisi porta lorem mollis
        aliquam. Egestas fringilla phasellus faucibus scelerisque eleifend donec
        pretium. Lacus suspendisse faucibus interdum posuere lorem ipsum. Massa
        enim nec dui nunc mattis enim. Felis donec et odio pellentesque. Aenean
        et tortor at risus viverra.
      </p>
    </div>

    <div class="max-w-full mx-auto bg-gradient-to-b from-yellow to-white mb-16">
      <h1 class="text-2xl font-semibold pb-[3rem] pt-4 mx-[5%]">
        Conditions We Treat
      </h1>
      <div
        v-for="(condition, index) in conditions"
        :key="index"
        class="bg-white p-4 rounded shadow mb-4 max-w-[80%] mx-auto"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">{{ condition.title }}</h2>
          <button
            class="text-blue-500 focus:outline-none"
            @click="toggleCondition(index)"
          >
            {{ condition.show ? "-" : "+" }}
          </button>
        </div>
        <ul v-if="condition.show" class="list-disc list-inside ml-4 pt-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 whitespace-pre-line pb-4">
              <p>{{ condition.explanation }}</p>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 mx-auto 2xl:w-1/5">
              <img
                :src="`/public/${condition.img}`"
                :alt="condition.title"
                class="w-[90%] mx-auto h-[100%] object-cover"
              />
            </div>
          </div>
          <h3 class="py-4 font-medium">Treatment options</h3>
          <li
            v-for="(treatment, treatmentIndex) in condition.treatments"
            :key="treatmentIndex"
          >
            {{ treatment }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conditions: [
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Condition 1",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Condition 1",
            "Treatment 2 for Condition 1",
          ],
          img: `red knee.png`,
          show: false,
        },
      ],
    };
  },
  methods: {
    toggleCondition(index) {
      this.conditions[index].show = !this.conditions[index].show;
    },
  },
};
</script>
