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
                :src="condition.img"
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
            "Injury and disease to the bones or soft tissues of the shoulder joint can make it unstable, and lead to pain, inflammation and reduced mobility. Arthroscopy is a minimally invasive diagnostic and surgical procedure performed for joint problems. Shoulder arthroscopy is performed using a pencil-sized instrument called an arthroscope. The arthroscope consists of a light system and camera that projects images of the surgical site onto a computer screen for your surgeon to clearly view. Arthroscopy is used to treat disease conditions and injuries involving the bones, cartilage, tendons, ligaments, and muscles of the shoulder joint. Shoulder arthroscopy is indicated to treat the following shoulder conditions when conservative treatment such as medication and therapy fails to relieve pain and disability: Shoulder impingement, Rotator cuff tear, Frozen shoulder or stiffness of the shoulder joint, Shoulder instability, Biceps rupture, Damaged cartilage or ligaments, Bone spurs or bony projections, Arthritis of the collarbone.",
          treatments: [
            "Surgery: Your surgeon performs shoulder arthroscopy under general or regional anesthesia. You may be positioned lying down on your side with your arm propped up or sitting in a semi-seated position. Sterile fluid is injected into the shoulder joint to expand the surgical area, so your surgeon has a clear view of the damage and room to work. A button-sized hole is made in the shoulder and the arthroscope is inserted. Your surgeon can view images captured by the camera in the arthroscope on a large monitor. Surgical instruments are introduced into the joint through separate small holes to remove and repair the damage to the joint. After surgery, the instruments are removed, and the incisions are closed with stitches or small sterile bandage strips.",
          ],
          img: `shoulder.png`,
          show: false,
        },
        {
          title: "Shoulder Stabilization",
          explanation:
            "Shoulder instability is a chronic condition that causes the frequent dislocation of the shoulder joint. A dislocation occurs when the end of the humerus (the ball portion) partially or completely dislocates from the glenoid (the socket portion) of the shoulder. A partial dislocation is referred to as a subluxation while a complete separation is referred to as a dislocation. The repeated dislocation of the humerus out of its socket is called chronic shoulder instability. A tear in the labrum or rotator cuff and a ligament tear in the front of the shoulder (a Bankart lesion) may lead to repeated shoulder dislocations. When conservative treatment options such as medications, rest and ice application fail to relieve shoulder instability, your surgeon may recommend shoulder stabilization surgery.",
          treatments: [
            "Surgery: Shoulder stabilization surgery is performed to improve stability and function to the shoulder joint and prevent recurrent dislocations. It can be performed arthroscopically, depending on your particular condition, with much smaller incisions. Arthroscopic stabilization is a surgical procedure to treat chronic instability of the shoulder joint. Arthroscopy is a minimally invasive surgery and is performed through two tiny incisions (portals), about half-inch in length, made around the joint area. Through one of the incisions, an arthroscope (small fiber-optic viewing instrument) is passed. A television camera attached to the arthroscope displays the images of the inside of the joint on the television monitor, which allows your surgeon to view the cartilage, ligaments and the rotator cuff while performing the procedure. A sterile saline solution is pumped into the joint, which expands it and provides a clearer view. Bone spurs, defects or tissue tears will be identified. Your surgeon makes use of tiny surgical instruments that are passed through the other incisions to treat the condition. Any tear in the rotator cuff will be sutured or stapled. The sutures will be held in place with the help of a small anchor that is drilled into the upper part of the humerus. Further, a thermal shrinkage device may be used in order to make the ligaments tight and prevent instability.",
          ],
          img: `shoulder.png`,
          show: false,
        },
        {
          title: "Rotator Cuff Repair",
          explanation:
            "The rotator cuff is a group of 4 muscles in the shoulder joint including the supraspinatus, infraspinatus, teres minor, and subscapularis. These muscles originate in the scapula and attach to the head of the humerus through tendons. The rotator cuff forms a sleeve around the humeral head and glenoid cavity, providing stability to the shoulder joint while enabling a wide range of movements. Rotator cuff repair is a surgery to repair an injured or torn rotator cuff. It is usually performed arthroscopically on an outpatient basis. An arthroscope, a small, fiber-optic instrument consisting of a lens, light source, and video camera. The camera projects images of the inside of the joint onto a large monitor, allowing your surgeon to look for any damage, assess the type of injury and repair it. Large rotator cuff tears may require open surgery. Your doctor may suggest surgery to treat rotator cuff tears if you: Do not respond to non-surgical treatment options for about a year, Have severe shoulder pain and experience loss of strength, You want to return to sports soon.",
          treatments: [
            "Surgery: One or more incisions are made at the skin near the shoulder joint. An arthroscope is inserted through the incision. Miniature surgical instruments are inserted to remove the damaged part of the tendon and injured surrounding tissue. The damaged ends of the tendon are sewn together. Care is taken to prevent damage to nearby nerves or blood vessels. A suture anchor may be used to reattach a completely torn tendon to the bone.  The incision is closed and covered with a bandage.",
          ],
          img: `shoulder.png`,
          show: false,
        },
        {
          title: "Shoulder Impingement",
          explanation:
            "Shoulder impingement is the inflammation of the tendons of the shoulder joint. It is one of the most common causes of pain in the shoulder. Shoulder impingement is also called swimmer’s shoulder, tennis shoulder or rotator cuff tendinitis. Impingement results in the young and middle-aged who engage in physical activities that require repeated overhead arm movements. The pain may be due to bursitis (inflammation of the bursa) overlying the rotator cuff or tendonitis of the cuff itself. In some circumstances, a partial tear of the rotator cuff may cause impingement pain. Individuals with shoulder impingement may experience severe pain at rest and during activities, weakness of the arm and difficulty in raising the hand overhead. Diagnosis involves a physical examination by your doctor, where your doctor checks for the possible range of movements with the affected shoulder. X-rays and MRI scans may be ordered to view the injury and inflammation.",
          treatments: [
            "Rest",
            "Ice Packs",
            "Anti-inflammatory Drugs",
            "Physical Therapy",
            "Arthroscopic Surgery",
          ],
          img: `shoulder.png`,
          show: false,
        },
        {
          title: "Arthroscopic Decompression",
          explanation:
            "Shoulder decompression, also known as subacromial decompression or acromioplasty, removes swollen and irritated soft tissues (bursa and ligaments) and bone spurs in your shoulder joint to widen the space around your rotator cuff tendons, known as the acromial space. This decompression surgery takes the pressure off your inflamed rotator cuff tendon so that it doesn't rub or catch on anything nearby. Most orthopaedic surgeons will perform this procedure arthroscopically and is known as arthroscopic subacromial decompression (ASAD) shoulder arthroscopic decompression.",
          treatments: [
            "Surgery: Shoulder arthroscopic decompression is usually performed under general anaesthetic and takes about one hour. Your surgeon will make several small cuts around your shoulder area. They will insert a miniature telescope into your shoulder joint to carefully assess the inside of your joint and tendons. Special surgical instrument will be inserted through the cuts to remove inflamed soft tissues and bone. They may repair any damaged tendons at the same time. Your cuts will then be closed.",
          ],
          img: `shoulder.png`,
          show: false,
        },
        {
          title: "SLAP Repair",
          explanation:
            "Your shoulder joint is a ball and socket joint made up of the upper arm bone, the shoulder blade, and the collarbone. The head of the upper arm bone fits into the socket of the shoulder joint known as the glenoid cavity. The outer edge of the glenoid is surrounded by a strong fibrous tissue called the labrum. A superior labrum anterior and posterior tear or SLAP tear is an injury to the labrum. This injury may also involve the biceps tendon, which is attached to the top part of the labrum. The injury occurs from repeated use of the shoulder while throwing or a fall onto the shoulder. A SLAP tear can be treated through an arthroscopic surgical procedure called a SLAP repair. A SLAP repair is indicated to treat the torn labrum of the shoulder socket when conservative treatment measures such as NSAIDs (non-steroidal anti-inflammatory medications) and physical therapy do not relieve the symptoms of a SLAP tear.",
          treatments: [
            "Surgery: Your surgeon first makes small incisions to insert the arthroscope and thin surgical instruments into the shoulder joint. Your surgeon will then identify the type of SLAP tear and remove the damaged tissue of the labrum. A small hole is then drilled into the bone of the shoulder socket close to the labral tear. Your surgeon will place an anchor into the drilled hole with a strong suture. Additional anchors can be placed as required for securing the torn labrum to the bone of the shoulder socket. Finally, the torn labrum is tied to the bone with the sutures.",
          ],
          img: `shoulder.png`,
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
