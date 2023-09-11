<template>
  <div class="bg-yellow md:pt-10">
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
          The anterior cruciate ligament, commonly known as the ACL, is one of the most commonly injured ligaments in the knee. Running diagonally through the middle of the joint, the ACL works together with three other ligaments to connect the femur (thigh bone) to the tibia (the larger of the two lower leg bones). A tearing of this ligament causes the knee to become unstable and the joint to slide forward. ACL injuries occur most often in athletes as a result of direct contact or an awkward fall. About half of all ACL injuries are also accompanied by damage to the meniscus, cartilage, bone or other ligaments in the knee.
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
      <h2 class="text-yellow-txt text-2xl mb-[2rem]">How We Can Help</h2>
      <p>
        Patients who suffer ACL injuries must use crutches and possibly knee braces during the early stages of recovery. Depending on the severity of the injury, surgery may or may not be necessary. While not all ACL injuries require surgery, leaving the ligament torn or damaged puts the patient at risk for recurring episodes of knee instability. It may also increase the likelihood of developing tissue damage or arthritis over time. For athletes who want to return to high-risk sports, surgical reconstruction is always necessary. Ligament tears cannot be repaired by simple reattachment. Normally grafting of part of another ligament, usually taken from the patient's knee or hamstring muscle, will be used in the procedure. At times, the graft may be taken from a deceased donor. Physical rehabilitation is always necessary to restore strength, function and stability to the knee, whether or not the patient undergoes surgery.
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
            class="text-blue-500 text-3xl focus:outline-none"
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
          title: "Knee Arthroscopy",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Knee Arthroscopy",
            "Treatment 2 for Knee Arthroscopy",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Posterior Cruciate Ligament Reconstruction",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Posterior Cruciate Ligament Reconstruction",
            "Treatment 2 for Posterior Cruciate Ligament Reconstruction",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Meniscal Transplantation",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Meniscal Transplantation",
            "Treatment 2 for Meniscal Transplantation",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Patello-Femoral Syndrome",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Patello-Femoral Syndrome",
            "Treatment 2 for Patello-Femoral Syndrome",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "ACL Reconstruction",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for ACL Reconstruction",
            "Treatment 2 for ACL Reconstruction",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Cartilage Restoration",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Cartilage Restoration",
            "Treatment 2 for Cartilage Restoration",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Meniscus Repair",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Meniscus Repair",
            "Treatment 2 for Meniscus Repair",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Jumper’s Knee",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Jumper’s Knee",
            "Treatment 2 for Jumper’s Knee",
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
