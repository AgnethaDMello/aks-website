<template>
  <div class="bg-yellow font-merriweather md:pt-10">
    <div class="relative">
      <img
        src="/assets/img/running.jpeg"
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
          src="/assets/img/redknee.png"
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
        Our Treatments
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
                :src="condition.img"
                :alt="condition.title"
                class="w-[90%] mx-auto h-[100%] object-cover"
              />
            </div>
          </div>
          <h3 class="py-4 font-medium">Repair Options - </h3>
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
            "Knee arthroscopy is a common surgical procedure performed using an arthroscope, a viewing instrument, to diagnose or treat a knee problem. It is a relatively safe procedure and you will usually be discharged from the hospital on the same day of surgery. The knee joint is vulnerable to a variety of injuries. The most common knee problems where knee arthroscopy may be recommended for diagnosis and treatment are: Torn meniscus, Torn or damaged cruciate ligament, Torn pieces of articular cartilage, Inflamed synovial tissue, Misalignment of the patella, Baker’s cyst: a fluid-filled cyst that develops at the back of the knee due to the accumulation of synovial fluid. It commonly occurs with knee conditions such as meniscal tear, knee arthritis, and rheumatoid arthritis., Certain fractures of the knee bones",
          treatments: [
            "Removal or repair of a torn meniscus",
            "Reconstruction or repair of a torn cruciate ligament",
            "Removal of small torn pieces of articular cartilage",
            "Removal of loose fragments of bones",
            "Removal of inflamed synovial tissue",
            "Removal of Baker’s cyst",
            "Realignment of the patella",
            "Making small holes or microfractures near damaged cartilage to stimulate cartilage growth"
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Posterior Cruciate Ligament Reconstruction",
          explanation:
            "PCL injuries are very rare and are more difficult to detect than other knee ligament injuries. Cartilage injuries, bone bruises, and ligament injuries often occur in combination with PCL injuries. Injuries to the PCL can be graded as I, II or III depending on the severity of injury. Grade I: ligament is mildly damaged and slightly stretched, but the knee joint is stable. Grade II: partial tear of the ligament. Grade III: complete tear of the ligament and the ligament is divided into two halves, making the knee joint unstable. The PCL is usually injured by a direct impact, such as in an automobile accident when the bent knee forcefully strikes the dashboard. In sports, it can occur when an athlete falls to the ground on a bent knee. Twisting injury or overextending the knee can cause the PCL to tear. PCL injuries are usually characterized by knee pain and swelling immediately after the injury. There may also be instability in the knee joint, and knee stiffness that causes limping and difficulty in walking.",
          treatments: [
            "Rest, ice, compression and elevation (RICE protocol)",
            "Knee Brace",
            "Physical Therapy",
            "Surgery: Your surgeon inspects the knee and removes any remains of the native PCL using an arthroscopic shaver. Care is taken to preserve the ligament of Wrisberg, if it is intact. The donor tendon is harvested from the patellar tendon or the semitendinosis and gracilis tendon (in the thigh). The soft tissue around the femur is debrided to assist in the insertion of the graft. A tunnel is created in the femur at the anatomic attachment site of the anterolateral bundle at the anteromedial wall of the intercondylar notch. This tunnel is drilled about 6-8 mm from the articular surface of the medial femoral condyle. The tibial attachment site is also prepared by identifying the normal attachment of the PCL at the bottom of the PCL facet. To place the graft, a tibial tunnel is created to the anatomic insertion of the PCL on the tibia. Once the tunnels are drilled, the sharp edges and soft tissues around the exit site of the tunnel are smoothed with a rasp. The tendon allograft is inserted in the femoral tunnel and fixed with a cannulated interference screw. The graft is made taut distally by removing any slack in the graft. The graft is then fixed to the tibia with the help of staples.After fixation, the normal posterior stability of the knee is assessed by employing the posterior drawer test. The incision is closed with sutures and covered with sterile dressings."
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Meniscal Transplantation",
          explanation:
            "Meniscal transplantation is a surgical procedure to replace the damaged meniscus of the knee with healthy cartilage. The meniscus is a C-shaped cartilage ring that acts as a cushion between the shinbone and the thighbone. Each of your knees has two menisci - one on the inside (medial aspect) and the other on the outside (lateral aspect)of your knee. Apart from the cushioning effect, the menisci also provide stability to the knee. A meniscal tear is a common knee injury that usually occurs secondary to trauma and is common in athletes. A meniscal tear may also occur in the elderly due to degenerative changes in the knee. A damaged meniscus predisposes you to persistent pain, swelling, and arthritis. Treatment of a meniscal tear depends on its type, severity, and location of the tear. Non-surgical options for the treatment of meniscal tears may include ice application, rest, elastic bandage, elevation, and physical therapy. However, a badly damaged meniscus may have to be removed. Knee replacement may be an option to consider in older individuals. However, meniscal transplantation can be an alternative option in younger patients.",
          treatments: [
            "Surgery: The goal of meniscal transplant surgery is to reduce pain and prevent arthritic changes. The surgery is performed under general anesthesia on an outpatient or inpatient basis. The procedure is usually performed with the help of an arthroscope (a fiber optic instrument), which is used to visualize the internal structures of the knee. A tiny camera is attached to one end of the arthroscope which transmits the internal images of the knee to a TV monitor. The arthroscope allows the surgeon to evaluate the entire knee joint including the cartilage, ligaments and the joint lining. The cartilage used for transplantation is derived from a human cadaver donor. The healthy donor cartilage is preoperatively customized to fit the patient’s knee. For the surgery, a surgical incision is made over the front of the knee in the area of the damaged meniscus. The damaged meniscus is removed and the site is prepared to receive the new meniscal implant. The new meniscus is implanted at the proper site under arthroscopic guidance. The new meniscus is then sutured to the surrounding tissue, for which an additional small incision is required. Screws or other fixation instruments are used to secure the meniscus in place. Depending on the severity and nature of the damage, additional procedures such as ligament or cartilage repair may also be performed along with the meniscal transplant.",
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Patello-Femoral Syndrome",
          explanation:
            "Patellofemoral syndrome (PFS) is one of the most common causes of anterior knee pain. It is commonly known as runner's knee, patellofemoral pain syndrome, retropatellar pain syndrome, lateral facet compression syndrome, or idiopathic anterior knee pain. It is a condition in which the cartilage under the kneecap is damaged due to injury or overuse. Patellofemoral pain syndrome is the most common cause of knee pain seen by doctors. It's common in people who participate in sports, especially women and young adults. The most common symptom is knee pain that increases with stair climbing or squatting movements. The primary treatment is rest. Pain relievers or physical therapy also can reduce pain.",
          treatments: [
            "Rest",
            "Pain Relievers",
            "Physical Therapy",
            "Arthroscopy: During this procedure, a surgeon inserts a pencil-thin device into the knee through a tiny cut in the skin. This device, called an arthroscope, contains a camera lens and light. Tools to repair the problem can be inserted through other small cuts in the skin.",
            "Realignment: In more-severe cases, a surgeon may need to operate on the knee to fix the angle of the kneecap or relieve pressure on the cartilage."
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "ACL Reconstruction",
          explanation:
            "An ACL injury most commonly occurs during sports that involve twisting or overextending of your knee. An ACL can be injured in several ways: Sudden directional change, Slowing down while running, Landing incorrectly from a jump, Direct blow to the side of your knee, such as during a football tackle. When you injure your ACL, you might hear a loud 'pop' sound and may feel the knee buckle. Within a few hours after an ACL injury, your knee may swell due to bleeding from vessels within the torn ligament. You may notice that the knee feels unstable or seems to give way, especially when trying to change direction on the knee. ACL reconstruction is a commonly performed surgical procedure. With recent advances in arthroscopic surgery, it can now be performed with minimal incision and low complication rates. The advancements in arthroscopic surgery make it easy for surgeons to view and work on knee structures through small incisions. The repair of the torn ligament can be performed at the same time as the diagnostic arthroscopy with fewer surgical risks. The surgery can usually be performed as an outpatient procedure, which means you may be discharged to go home on the same day as the procedure.",
          treatments: [
            "Arthroscopic Surgery",
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Cartilage Restoration",
          explanation:
            "Articular Cartilage is the white tissue lining the end of bones where these bones connect to form joints. Cartilage acts as cushioning material and helps in smooth gliding of bones during movement. An injury to the joint may damage this cartilage which cannot repair on its own. Cartilage can be damaged with increasing age, normal wear and tear, or trauma. Damaged cartilage cannot cushion the joints during movement and the joints may rub over each other causing severe pain and inflammation. Cartilage restoration is a surgical procedure where orthopedic surgeons stimulate the growth of new cartilage that restores the normal function. Arthritis condition can be delayed or prevented through this procedure.",
          treatments: [
            "Microfracture: In this method numerous holes are created in the injured joint surface using a sharp tool. This procedure stimulates healing response by creating new blood supply. Blood supply results in growth of new cartilage.",
            "Drilling: In this method a drilling instrument is used to create holes in the injured joint surface. Drilling holes creates blood supply and stimulate growth of new cartilage. Although the method is similar to microfracture, it is less precise, and the heat produced during drilling may damage other tissues.",
            "Abrasion Arthroplasty: High speed metal-like object is used to remove the damaged cartilage. This procedure is performed using an arthroscope.",
            "Osteochondral Autograft Transplantation: Healthy cartilage tissue (graft) is taken from the bone that bears less weight and is transferred to the injured joint place. This method is used for smaller cartilage defects.",
            "Osteochondral Allograft Transplantation: A cartilage tissue (graft) is taken from a donor and transplanted to the site of the injury. Allograft technique is recommended if larger part of cartilage is damaged.",
            "Autologous Chondrocyte Implantation: In this method a piece of healthy cartilage from other site is removed using arthroscopic technique and is cultured in laboratory. Cultured cells form a larger patch which is then implanted in the damaged part by open surgery."
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Meniscus Repair",
          explanation:
            "Two wedge-shaped cartilage pieces are present between the thighbone and shinbone. These are called menisci. They stabilize the knee joint and act as shock absorbers. A meniscus tear is the commonest knee injury in athletes, especially those involved in contact sports. A sudden bend or twist in your knee can cause the meniscus to tear. This is a traumatic meniscal tear. The elderly are more prone to degenerative meniscal tears as the cartilage wears out and weakens with age. A torn meniscus causes pain, swelling, stiffness, catching or locking sensation in your knee, making you unable to move your knee through its complete range of motion. Your orthopedic surgeon will examine your knee, evaluate your symptoms and medical history before suggesting a treatment plan.",
          treatments: [
            "Meniscus removal (meniscectomy)",
            "Meniscus repair",
            "Meniscus replacement",
          ],
          img: `redknee.png`,
          show: false,
        },
        {
          title: "Jumper’s Knee",
          explanation:
            "Jumper’s knee, also known as patellar tendinitis, is inflammation of the patellar tendon that connects your kneecap (patella) to your shinbone. This tendon helps in the extension of the lower leg. Jumper’s knee usually results from repetitive trauma or overuse, particularly from sports activities that involve jumping such as basketball or volleyball. Therefore, this condition is known as jumper’s knee. Rarely, this condition may also occur because of an acute injury to the tendon that has not healed properly. Pain over the patellar tendon is the first symptom of jumper’s knee. You may also have pain during activities, especially jumping or kneeling. Rarely, swelling around the tendon may be seen. Your doctor will evaluate your condition based on your symptoms and physical examination. An X-ray of the knee may be ordered to ensure that there is no problem involving the bones or bone spur around the knee. An MRI scan can reveal degenerative changes in the patellar tendon.",
          treatments: [
            "Rest the injured knee and avoid activities such as running and jumping that worsen the condition.",
            "Non-steroidal anti-inflammatory medications (NSAIDs) may be prescribed to provide relief from pain and swelling associated with patellar tendinitis.",
            "Stretching before exercising is important to prevent the recurrence of patellar tendinitis. These exercises can also help strengthen the patellar tendon and nearby muscles such as the quadriceps, hamstrings and calf muscles.",
            "The application of ice to the affected area helps to control the inflammation and reduce the swelling.",
            "A knee support or strap (called an intrapatellar strap or a Chopat strap) can be worn to relieve pain by directing the force away from your tendon and into the strap.",
            "Iontophoresis involves the application of topical corticosteroid medication to the affected area with the help of a small device that uses an electric charge to deliver the medication through your skin.",
            "Corticosteroid injection may be administered directly into the sheath around the affected patellar tendon under the guidance of an ultrasound. This helps to relieve pain and perform strength exercises without any pain."

          ],
          img: `redknee.png`,
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
