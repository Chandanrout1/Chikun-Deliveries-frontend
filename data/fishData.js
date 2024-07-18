const fishData = [
    {
      id: 1,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2F470x320_248%2520Rohu%2520Fish%2520Medium%2520BC%2520w%2520o%2520Head.jpg&w=384&q=75",
      name: "Rohu Curry-Cut",
      price: "210",
      gram: "500",
      pieces: "8-12",
      serves: "3-4",
    },
    {
      id: 2,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2F470x320_229%2520Freshwater%2520Catla%2520Bengali%2520Cut%2520Without%2520Head.jpg&w=384&q=75",
      name: "Catla Curry-cut",
      price: "230",
      gram: "500",
      pieces: "6-9",
      serves: "3-4",
    },
    {
      id: 3,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2F470%2520X%2520320_289%2520Tengra%2520Tengra%2520-%2520(Whole%2520-%2520Cleaned%2520and%2520Gutted).jpg&w=384&q=75",
      name: "Tengra Whole",
      price: "150",
      gram: "350",
      pieces: "3-5",
      serves: "2-3",
    },
    {
      id: 4,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2F328x226_283%2520Bata%2520Small%2520Whole%2520Cleaned.jpg&w=384&q=75",
      name: "Bata Whole",
      price: "130",
      gram: "350",
      pieces: "3-5",
      serves: "2-3",
    },
    {
      id: 5,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F1a6ceee1-16ad-99f6-8551-5a8a9c0c92b2%2Foriginal%2F1701074616304.jpg&w=384&q=75",
      name: "Boal fish Curry-cut",
      price: "235",
      gram: "500",
      pieces: "5-7",
      serves: "3-4",
    },
    {
      id: 6,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Fb3df8d2f-c66a-9ab7-c0c9-6d8da3c8c788%2Foriginal%2F1716467233342.png&w=384&q=75",
      name: "Tilapia Whole",
      price: "169",
      gram: "500",
      pieces: "2-4",
      serves: "2-3",
    },
    {
      id: 7,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F034d99c4-9550-dfec-4c98-8312d9a054f2%2Foriginal%2F1717156195634.png&w=384&q=75",
      name: "Roopchand Curry-cut",
      price: "149",
      gram: "500",
      pieces: "6-8",
      serves: "3-4",
    },
    {
      id: 8,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F3129f08e-2fb7-388a-358b-de748424ae39%2Foriginal%2F1701764480932.jpg&w=384&q=75",
      name: "Murrel-Fry cut",
      price: "210",
      gram: "500",
      pieces: "4-8",
      serves: "3-4",
    },
    {
      id: 9,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F2fab3b4b-d1b3-0fd2-8d6a-127304cf2c32%2Foriginal%2F1717570270644.png&w=384&q=75",
      name: "Mackerel Whole",
      price: "230",
      gram: "400",
      pieces: "75-100",
      serves: "2-3",
    },
    {
      id: 10,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2F470x320_98%2520Bombay%2520Duck%2520Medium%2520WCG.jpg&w=384&q=75",
      name: "Bombay Duck-Whole",
      price: "149",
      gram: "300",
      pieces: "7-10",
      serves: "2-3",
    },
    {
      id: 11,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F74352d50-7c35-9e4b-244e-68b044738a5d%2Foriginal%2F1701766386884.jpg&w=384&q=75",
      name: "Seer -Boneless cubes",
      price: "320",
      gram: "300",
      pieces: "10-15",
      serves: "2-3",
    },
    {
      id: 12,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F3f867a41-e49a-bdd5-d50a-aedf94ec6e4c%2Foriginal%2F1717570391893.png&w=384&q=75",
      name: "Lady Fish-Whole",
      price: "249",
      gram: "350",
      pieces: "5-8",
      serves: "2-3",
    },
    {
      id: 13,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Fc876bf83-e4bd-599f-dc79-eaef96883ef9%2Foriginal%2F1717771678521.png&w=384&q=75",
      name: "King Fish Curry-Cut",
      price: "300",
      gram: "500",
      pieces: "4-6",
      serves: "4-5",
    },
    {
      id: 14,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Ff5d62b9a-9c19-43b1-9152-78f4a1879a60%2Foriginal%2F1716460603283.png&w=384&q=75",
      name: "Red Snapper-Steaks",
      price: "410",
      gram: "500",
      pieces: "4-6",
      serves: "4-5",
    },
    {
      id: 15,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F2df2b0a6-7788-5659-8bdd-0152dfa0aeaa%2Foriginal%2F1718360510961.png&w=384&q=75",
      name: "Emperor-Whole",
      price: "349",
      gram: "500",
      pieces: "3-4",
      serves: "2-3",
    },
    {
      id: 16,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Fd433c97a-2c5d-2067-9d05-26121564cadd%2Foriginal%2F1716467513533.png&w=384&q=75",
      name: "Pink Perch-Whole",
      price: "349",
      gram: "400",
      pieces: "2-4",
      serves: "3-4",
    },
    {
      id: 17,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F184d9905-4c09-9c60-1f61-f4ea1186dd5a%2Foriginal%2F1699203970080.jpg&w=384&q=75",
      name: "Salmon-Steaks",
      price: "1360",
      gram: "350",
      pieces: "2-3",
      serves: "1-2",
    },
    {
      id: 18,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F4ef79c04-2b8d-0344-4e5b-b436bc2aab9d%2Foriginal%2F1712656484995.jpg&w=384&q=75",
      name: "Silver Croaker-Whole",
      price: "280",
      gram: "500",
      pieces: "3-5",
      serves: "2-3",
    },
    {
      id: 19,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F8eaccb88-ed12-97aa-bf69-ffd1389c3f59%2Foriginal%2F1699209789618.jpg&w=384&q=75",
      name: "White Pomfret-Whole",
      price: "799",
      gram: "400",
      pieces: "2-4",
      serves: "2-3",
    },
    {
      id: 20,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F41a0ae59-42e6-c93a-b5ff-083b6ff4f333%2Foriginal%2F1701766930400.jpg&w=384&q=75",
      name: "Seer-Steaks",
      price: "1220",
      gram: "500",
      pieces: "3-4",
      serves: "2-3",
    },
    {
      id: 21,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FBanner%2FPDP_339%2520Barracuda.jpg&w=384&q=75",
      name: "Barracuda-Steaks",
      price: "320",
      gram: "350",
      pieces: "8-9",
      serves: "2-3",
    },
    {
      id: 22,
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2F256d2816-3bd6-db89-0d82-c38c2fea403d%2Foriginal%2F1717330491328.jpg&w=384&q=75",
      name: "Trevally-Steaks",
      price: "399",
      gram: "500",
      pieces: "9-13",
      serves: "2-3",
    }
      
]

export default fishData;