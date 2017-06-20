export default {
  users: [
    { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
    { id: 2, name: 'DEF', email: 'def@babelcoder.com' },
    { id: 3, name: 'GHI', email: 'ghi@babelcoder.com' }
  ],
  articles: [
    {
      id: 1,
      title: 'โหลดเว็บเร็วขึ้นไม่ยาก แค่ใช้ PurifyCSS',
      excerpt: 'ใช้ PurifyCSS เพื่อกรองเฉพาะ CSS ที่ใช้งานจริง โดยตัดส่วนที่ไม่ได้ใช้ออกไป เพื่อให้เว็บโหลดเร็วขึ้น',
      content: 'คุณเคยใช้ Twitter Bootstrap หรือไม่? \nเป็นที่ทราบกันดีว่า CSS Framework ไม่ว่าจะเป็น Twitter Bootstrap, Zurb Foundation หรือแม้กระทั่ง Pure CSS ที่ชื่อเหมือนจะผอมบาง แท้จริงแล้วบวมจนอืดเป็นช้างน้ำระยะสุดท้าย \nสมมติโค้ด HTML ของเรามีการเรียกใช้ button โดยใช้ Bootstrap ในการจัดสไตล์ดังนี้',
      comments: [
        {
          id: 1,
          user: { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        },
        {
          id: 2,
          user: { id: 2, name: 'DEF', email: 'def@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        },
        {
          id: 3,
          user: { id: 3, name: 'GHI', email: 'ghi@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        }
      ]
    },
    {
      id: 2,
      title: 'GraphQL Best Practices: สร้าง GraphQL ให้คูลยังไง?',
      excerpt: 'ป็นที่ประจักษ์แล้วว่าบริษัทยักษ์ใหญ่หลายแห่งได้มีการใช้งาน GraphQL กันมากขึ้น ทั้ง Facebook (แหงหละ คิดเองแล้วไม่ใช้ได้ไง), Twitter, Github และบริษัทต่อไปอาจเป็นคุณ',
      content: 'ป็นที่ประจักษ์แล้วว่าบริษัทยักษ์ใหญ่หลายแห่งได้มีการใช้งาน GraphQL กันมากขึ้น ทั้ง Facebook (แหงหละ คิดเองแล้วไม่ใช้ได้ไง), Twitter, Github และบริษัทต่อไปอาจเป็นคุณ',
      comments: [
        {
          id: 4,
          user: { id: 1, name: 'ABC', email: 'abc@babelcoder.com' },
          articleId: 1,
          message: 'Lorem Ipsum'
        }
      ]
    }
  ],
  comments: [
    { id: 1, userId: 1, articleId: 1, message: 'Lorem Ipsum' },
    { id: 2, userId: 2, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 3, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 1, articleId: 2, message: 'Lorem Ipsum' }
  ]
}
