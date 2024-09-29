'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก',
        url: 'https://www.wongnai.com/trips/travel-at-etong-pilok',
        description: 'จังหวะ จะเที่ยว "บ้านอีต่อง เหมืองปิล็อก" ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'เที่ยวญี่ปุ่นไปกับภูเขาไฟชื่อดังให้สุดฟินจาก 15 มุมสุดงาม~',
        url: 'https://www.wongnai.com/trips/views-around-fuji',
        description: 'สายถ่ายรูปห้ามพลาด! ลุยเที่ยวญี่ปุ่น ชมภูเขาไฟฟูจิ ทิวทัศน์รอบทิศหลากมุม งามไม่รู้ลืม',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'เที่ยวฟินแลนด์แบบฟิน ๆ ไปฟาร์ม Husky ขี่ Reindeer เล่น Snowmobile',
        url: 'https://www.wongnai.com/trips/trip-at-finland',
        description: 'ใครว่าเที่ยวฟินแลนด์ มีแค่ล่าแสงเหนือ กิจกรรมกลางหิมะเค้าก็มีให้ทำเพียบ! ทั้งขี่ Husky, Reindeer ขับเจ็ทสกีหิมะท่ามกลางภูเขาอุณภูมิติดลบ ต้องลองสักครั้งในชีวิต',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'สัมผัสแสงสียามค่ำคืนในฮ่องกง อิ่มฟินสุดคุ้มกับ Hong Kong Night Treats',
        url: 'https://www.wongnai.com/trips/hong-kong-night-treats',
        description: 'เที่ยวฮ่องกงยามกลางวันแล้ว มาทัวร์กินให้หนำใจกันยามค่ำ กับ Hong Kong Night Treats บัตรกำนัลเงินสดสุดคุ้มมูลค่า 100 ฮ่องกงดอลลาร์ เที่ยวฟินกินคุ้มตลอดทริป!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ท้าความหนาวใน ทาคายามะ สัมผัสเมืองเก่า เคล้ากลิ่นอายประวัติศาสตร์',
        url: 'https://www.wongnai.com/trips/takayama-city',
        description: 'เข้าหน้าหนาวแบบนี้ ได้เวลาเที่ยว “ทาคายามะ” อีกหนึ่งเมืองเก่าของญี่ปุ่น มาสัมผัสวัฒนธรรมญี่ปุ่นโบราณ ในบรรยากาศแสนวิเศษท่ามกลางหิมะขาวโพลนสุดประทับใจ!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ติดปีกบินไป เซี่ยงไฮ้ และ หางโจว กินเที่ยวฟิน เก็บครบทุกไฮไลต์!',
        url: 'https://www.wongnai.com/trips/travel-shanghai-and-hangzhou',
        description: 'ใกล้สิ้นปีก็ได้ฤกษ์เที่ยว! มาแพ็กกระเป๋าบินตรงไป “เซี่ยงไฮ้” เมืองเศรษฐกิจ ของจีน และ “หางโจว” ที่สวยขึ้นชื่อราวสวรรค์บนดิน จะมีไฮไลต์อะไรบ้าง มาลุยกันเลย!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
