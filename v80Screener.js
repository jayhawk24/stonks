const { default: axios } = require("axios");
const { default: parse } = require("node-html-parser");
const { default: dotenv } = require("dotenv").config();

const stocks = [
  "CIPLA",
  "SANOFI",
  "LALPATHLAB",
  "RELAXO",
  "BATAINDIA",
  "HINDUNILVR",
  "MARICO",
  "BRITANNIA",
  "DABUR",
  "COLPAL",
  "NESTLEIND",
  "ITC",
  "BAJAJCON",
  "HEROMOTOCO",
  "BAJAJ_AUTO",
  "EICHERMOT",
  "WHIRLPOOL",
  "SYMPHONY",
  "PIDILITIND",
  "HAVELLS",
  "PAGEIND",
  "TITAN",
  "BAJFINANCE",
  "BAJAJFINSV",
  "PGHH",
  "GILLETTE",
  "HDFCLIFE",
  "TCS",
  "INFY",
  "WIPRO",
  "HCLTECH",
  "AKZOINDIA",
  "ASIANPAINT",
  "BERGEPAINT",
  "ESCORTS",
  "APLLTD",
  "CEATLTD",
  "JKLAKSHMI",
  "JSWSTEEL",
  "TATASTEEL",
  "AMARAJABAT",
  "ASTRAL",
  "KOTAKBANK",
  "HDFCBANK",
  "ICICIBANK",
  "NIFTYBEES",
  "BANKBEES",
  "HDFCAMC",
  "ASIANTILES",
  "NMDC",
  "EXIDEIND",
  "###V40 NEXT",
  "3MINDIA",
  "AVANTIFEED",
  "BAYERCROP",
  "BOSCHLTD",
  "CAPLIPOINT",
  "CERA",
  "DIXON",
  "EQUITAS",
  "EQUITASBNK",
  "ERIS",
  "FINCABLES",
  "FINEORG",
  "GODREJCP",
  "HONAUT",
  "ISEC",
  "JCHAC",
  "KANSAINER",
  "MCX",
  "OFSS",
  "POLYCAB",
  "RADICO",
  "RAJESHEXPO",
  "SFL",
  "SIS",
  "SUNTV",
  "TASTYBITE",
  "TEAMLEASE",
  "TTKPRESTIG",
  "UJJIVANSFB",
  "MCDOWELL_N",
  "VGUARD",
  "VINATIORGA",
  "VIPIND"
];

const url =
  "https://www.screener.in/screen/raw/?sort=Market+Capitalization&order=&source=334875&query=Current+price+%3C+DMA+200&limit=50&page=";

const filteredStocks = [];

for (let i = 1; i <= 20; i++) {
  axios
    .get(url + i, {
      headers: {
        Cookie: process.env.COOKIE
      }
    })
    .then((resp) => {
      const root = parse(resp.data);
      const links = root.querySelectorAll("[data-row-company-name] td a");
      stocks.map((stock) => {
        links.map((elem) => {
          if (elem.rawAttrs.includes(stock)) {
            filteredStocks.push(elem);
          }
        });
      });
      if (i === 20) {
        console.log(filteredStocks.map((elem) => elem.childNodes[0]._rawText));
      }
    })
    .catch((e) => e.message);
}
