<template>
  <div class="bg-yellow font-merriweather md:pt-10">
    <div class="relative">
      <img
        src="/assets/img/throw.jpg"
        alt="Running header image"
        class="h-[30vh] w-[100vw] object-cover"
        style="object-position: center bottom"
      />
      <h1 class="absolute top-1/4 text-white text-5xl ml-[5%] mt-10">
        Shoulder Services
      </h1>
    </div>
    <div
      class="relative md:flex items-center md:justify-between mx-[5%] mt-[3rem]"
    >
      <div class="md:w-2/3 md:pr-8 pb-4">
        <h2 class="text-yellow-txt text-2xl mb-[5%]">
          What Is The Labrum?
        </h2>
        <p>
          The socket of the shoulder, or glenoid, is covered with a layer of cartilage called the labrum that cushions and deepens the socket to help stabilize the joint. Traumatic injuries and repetitive overhead shoulder movements may cause a tear in the labrum, leading to pain, limited motion, instability and weakness in the joint. There are three main types of labrum tears: SLAP tear — Here the tear is above the middle of the glenoid. SLAP stands for “superior labrum, anterior to posterior,” which means front to back. This is the common form of labrum tear in tennis, volleyball, and baseball players, and anyone who frequently uses overhead arm movements. Bankart tear — Damage here is in the lower half of the glenoid socket. This is more common in younger people who dislocate their shoulder. Posterior labrum tear — This type of injury occurs in the back of the shoulder joint. These are rare, occurring in only 5 to 10 percent of all shoulder injuries.
        </p>
      </div>
      <div class="md:w-1/3">
        <img
          src="/assets/img/shoulder.png"
          alt="pain on shoulder"
          class="w-full max-w-md mx-auto"
        />
      </div>
    </div>

    <hr class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-100" />
    <div class="pb-[3rem] mx-[5%]">
      <h2 class="text-yellow-txt text-2xl mb-[2rem]">How We Can Help</h2>
      <p>
        Labral repair surgery trims the damaged portion of the labrum in the shoulder and if necessary, secures it with staples, anchors or sutures. This outpatient procedure is usually performed through arthroscopy, which allows the doctor to view the tear through a small camera and insert the specialized tools through tiny incisions. Patients can benefit from less tissue damage, shorter recovery times and less scarring with arthroscopic techniques. However, larger tears may require an open procedure. Once anesthesia has been administered, the surgeon will make the incisions in the shoulder area. Upon obtaining a visualization of the labrum, the injury can be better evaluated. The torn area will be removed and all necessary repairs are made. If a separation from the tendon has occurred as well, it may require the use of sutures and anchors to achieve fixation by drilling tiny holes in the glenoid bone in which the anchors are then embedded. Sutures are used to connect the labrum to the anchors, maintaining the correct positioning of the labrum and preventing the labrum from detaching again.
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
          title: "Shoulder Arthroscopy",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Shoulder Arthroscopy",
            "Treatment 2 for Shoulder Arthroscopy",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Shoulder Stabilization",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Shoulder Stabilization",
            "Treatment 2 for Shoulder Stabilization",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Rotator Cuff Repair",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Rotator Cuff Repair",
            "Treatment 2 for Rotator Cuff Repair",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Shoulder Impingement",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Shoulder Impingement",
            "Treatment 2 for Shoulder Impingement",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "Arthroscopic Decompression",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for Arthroscopic Decompression",
            "Treatment 2 for Arthroscopic Decompression",
          ],
          img: `red knee.png`,
          show: false,
        },
        {
          title: "SLAP Repair",
          explanation:
            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como ição mais ou menos normal de letras, ao contrário do uso de , tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor)",
          treatments: [
            "Treatment 1 for SLAP Repair",
            "Treatment 2 for SLAP Repair",
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
