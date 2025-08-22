// Global Variables
let assets = [
  {
    id: "2024/01/KOM-0001", // Diubah dari ELK
    name: "Laptop HP ProBook",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "HP",
    serial: "HP123456",
    location: "Ruang IT",
    condition: "Baik",
    status: "Tersedia",
    price: 8000000,
    purchaseDate: "2024-01-15",
    dateAdded: "2024-01-15",
    image: "assets/Laptop-HP-ProBook.jpeg",
    barcode: "HP123456789",
  },
  {
    id: "2024/01/KOM-0002", // Diubah dari ELK
    name: "Proyektor Epson",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Epson",
    serial: "EP789012",
    location: "Aula",
    condition: "Baik",
    status: "Dipinjam",
    price: 5000000,
    purchaseDate: "2024-01-12",
    dateAdded: "2024-01-12",
    image: "assets/proyektor-epson.jpeg",
    barcode: "EP789012345",
  },
  {
    id: "2024/01/FUR-0001",
    name: "Meja Kerja",
    type: "FUR",
    typeName: "Furniture",
    brand: "Olympic",
    serial: "OL345678",
    location: "Ruang Dosen",
    condition: "Rusak Ringan",
    status: "Maintenance",
    price: 2500000,
    purchaseDate: "2024-01-10",
    dateAdded: "2024-01-10",
    image: "assets/meja-kerja.jpeg",
    barcode: "OL345678901",
  },
  // Aset baru dari CSV (dengan klasifikasi yang diperbarui)
  {
    id: "2024/01/KOM-0003", // Diubah dari ELK
    name: "Deskbook",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Hp",
    serial: "DBHP001",
    location: "9 di lab TI, 1 di R. TI, 1 di R. Admin, 1 di TE",
    condition: "Baik",
    status: "Tersedia",
    price: 10000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Deskbook",
    barcode: "DBHP001BC",
  },
  {
    id: "2024/01/KOM-0004", // Diubah dari ELK
    name: "Keyboard",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Logitech, Hp",
    serial: "KB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 125000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Keyboard",
    barcode: "KB001BC",
  },
  {
    id: "2024/01/KOM-0005", // Diubah dari ELK
    name: "Mouse",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Logitech, Hp",
    serial: "MS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 70000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Mouse",
    barcode: "MS001BC",
  },
  {
    id: "2024/01/KOM-0006", // Diubah dari ELK
    name: "Monitor DELL E2211H",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Dell",
    serial: "MNDELL001",
    location: "17 di lab TI",
    condition: "Baik",
    status: "Tersedia",
    price: 780000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Monitor+DELL",
    barcode: "MNDELL001BC",
  },
  {
    id: "2024/01/KOM-0007", // Diubah dari ELK
    name: "PC Rakitan",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Asrock",
    serial: "PCRAK001",
    location: "17 di lab TI",
    condition: "Baik",
    status: "Tersedia",
    price: 3000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=PC+Rakitan",
    barcode: "PCRAK001BC",
  },
  {
    id: "2024/01/KOM-0008", // Diubah dari ELK
    name: "Headphones JETE",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "JETE",
    serial: "HPJETE001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Headphones+JETE",
    barcode: "HPJETE001BC",
  },
  {
    id: "2024/01/JAR-0001", // Diubah dari ELK
    name: "Splicer",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Fusion",
    serial: "SPLCR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Splicer",
    barcode: "SPLCR001BC",
  },
  {
    id: "2024/01/JAR-0002", // Diubah dari ELK
    name: "Fiber optic 250 meter",
    type: "JAR",
    typeName: "Jaringan",
    brand: "",
    serial: "FO250M001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 240000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Fiber+Optic",
    barcode: "FO250M001BC",
  },
  {
    id: "2024/01/JAR-0003", // Diubah dari ELK
    name: "Switch tplink",
    type: "JAR",
    typeName: "Jaringan",
    brand: "tp-link",
    serial: "SWTPLINK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 750000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Switch+TPLink",
    barcode: "SWTPLINK001BC",
  },
  {
    id: "2024/01/JAR-0004", // Diubah dari ELK
    name: "HTB",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Netlink",
    serial: "HTB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 100000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=HTB",
    barcode: "HTB001BC",
  },
  {
    id: "2024/01/FUR-0002",
    name: "Rak rako",
    type: "FUR",
    typeName: "Furniture",
    brand: "Raaco",
    serial: "RAKRAKO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 450000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Rak+Raako",
    barcode: "RAKRAKO001BC",
  },
  {
    id: "2024/01/ATK-0001",
    name: "CRIMPING BIRU schneider",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Schneider",
    serial: "CRIMPSCH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 350000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Crimping+Schneider",
    barcode: "CRIMPSCH001BC",
  },
  {
    id: "2024/01/ATK-0002",
    name: "CRIMPING BIRU trendnet",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Trendnet",
    serial: "CRIMPTREND001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 350000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Crimping+Trendnet",
    barcode: "CRIMPTREND001BC",
  },
  {
    id: "2024/01/ATK-0003",
    name: "CRIMPING Hijau HT-315",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "HT-315",
    serial: "CRIMPHT315001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 35000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Crimping+HT-315",
    barcode: "CRIMPHT315001BC",
  },
  {
    id: "2024/01/ATK-0004",
    name: "CRIMPING VENTION",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Vention",
    serial: "CRIMPVENT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 150000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Crimping+Vention",
    barcode: "CRIMPVENT001BC",
  },
  {
    id: "2024/01/JAR-0005", // Diubah dari ELK
    name: "SWITCH MANAGEABLE RB260GS",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Mikrotik",
    serial: "SWMK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Switch+Mikrotik",
    barcode: "SWMK001BC",
  },
  {
    id: "2024/01/JAR-0006", // Diubah dari ELK
    name: "ROUTERBOARD hAP RB951UI",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Mikrotik",
    serial: "RBMK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1400000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Routerboard+Mikrotik",
    barcode: "RBMK001BC",
  },
  {
    id: "2024/01/JAR-0007", // Diubah dari ELK
    name: "ROUTERBOARD hEX Series",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Mikrotik",
    serial: "RBMKHEX001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1290000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Routerboard+Mikrotik+hEX",
    barcode: "RBMKHEX001BC",
  },
  {
    id: "2024/01/JAR-0008", // Diubah dari ELK
    name: "Switch LS108G",
    type: "JAR",
    typeName: "Jaringan",
    brand: "tp-link",
    serial: "SWTPLINKLS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 285000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Switch+TPLink+LS108G",
    barcode: "SWTPLINKLS001BC",
  },
  {
    id: "2024/01/JAR-0009", // Diubah dari ELK
    name: "OTDR Joinwit JW3302",
    type: "JAR",
    typeName: "Jaringan",
    brand: "JW3302",
    serial: "OTDRJW001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 23000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=OTDR+Joinwit",
    barcode: "OTDRJW001BC",
  },
  {
    id: "2024/01/JAR-0010", // Diubah dari ELK
    name: "Router Cisco 1900 Series 1921",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Cisco",
    serial: "RTRCISCO1900001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1550000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Router+Cisco+1900",
    barcode: "RTRCISCO1900001BC",
  },
  {
    id: "2024/01/JAR-0011", // Diubah dari ELK
    name: "Router Cisco 2900 Series 2901",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Cisco",
    serial: "RTRCISCO2900001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1550000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Router+Cisco+2900",
    barcode: "RTRCISCO2900001BC",
  },
  {
    id: "2024/01/JAR-0012", // Diubah dari ELK
    name: "Switch HUB Cisco Catalyst 2960 48 port POE",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Cisco",
    serial: "SWHUBCISCO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1850000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Switch+Cisco+POE",
    barcode: "SWHUBCISCO001BC",
  },
  {
    id: "2024/01/LAN-0001",
    name: "Container Box cb 82 hijau",
    type: "LAN",
    typeName: "Lainnya",
    brand: "Shinpo",
    serial: "CBH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 140000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Container+Box",
    barcode: "CBH001BC",
  },
  {
    id: "2024/01/LAN-0002",
    name: "Container Box cb 82 biru",
    type: "LAN",
    typeName: "Lainnya",
    brand: "Shinpo",
    serial: "CBB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 140000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Container+Box",
    barcode: "CBB001BC",
  },
  {
    id: "2024/01/ATK-0005",
    name: "Toolbox kenmaster H415",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Kenmaster",
    serial: "TBKM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 100000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Toolbox+Kenmaster",
    barcode: "TBKM001BC",
  },
  {
    id: "2024/01/KOM-0009", // Diubah dari ELK
    name: "Ram Kingston KVR26N19S8/8",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Kingston",
    serial: "RAMKNG001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 550000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RAM+Kingston",
    barcode: "RAMKNG001BC",
  },
  {
    id: "2024/01/KOM-0010", // Diubah dari ELK
    name: "Ram 4 GB 2RX8",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "RAM4GB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 250000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RAM+4GB",
    barcode: "RAM4GB001BC",
  },
  {
    id: "2024/01/ATK-0006",
    name: "crimping",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "LG",
    serial: "CRIMPINGLG001",
    location: "di lab TI",
    condition: "Baik",
    status: "Tersedia",
    price: 3500000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Crimping+LG",
    barcode: "CRIMPINGLG001BC",
  },
  {
    id: "2024/01/LAN-0003",
    name: "Tripod",
    type: "LAN",
    typeName: "Lainnya",
    brand: "",
    serial: "TRIPOD001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 160000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Tripod",
    barcode: "TRIPOD001BC",
  },
  {
    id: "2024/01/FUR-0003",
    name: "Kursi",
    type: "FUR",
    typeName: "Furniture",
    brand: "",
    serial: "KRSI001",
    location: "26 di lab TI (1 rusak), 4 di R. TI",
    condition: "Baik",
    status: "Tersedia",
    price: 300000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kursi",
    barcode: "KRSI001BC",
  },
  {
    id: "2024/01/FUR-0004",
    name: "Meja",
    type: "FUR",
    typeName: "Furniture",
    brand: "",
    serial: "MEJA001",
    location: "di lab TI",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Meja",
    barcode: "MEJA001BC",
  },
  {
    id: "2024/01/FUR-0005",
    name: "Papan Tulis",
    type: "FUR",
    typeName: "Furniture",
    brand: "",
    serial: "PAPTUL001",
    location: "di lab TI",
    condition: "Baik",
    status: "Tersedia",
    price: 680000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Papan+Tulis",
    barcode: "PAPTUL001BC",
  },
  {
    id: "2024/01/JAR-0013", // Diubah dari ELK
    name: "kabel LAN CAT 6",
    type: "JAR",
    typeName: "Jaringan",
    brand: "",
    serial: "KBLAN001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 220000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+LAN",
    barcode: "KBLAN001BC",
  },
  {
    id: "2024/01/KOM-0011", // Diubah dari ELK
    name: "Kabel VGA",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "KBVGA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+VGA",
    barcode: "KBVGA001BC",
  },
  {
    id: "2024/01/ELK-0025",
    name: "Sensor LDR",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRLDR001",
    location: "di laci biru A",
    condition: "Baik",
    status: "Tersedia",
    price: 400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+LDR",
    barcode: "SNSRLDR001BC",
  },
  {
    id: "2024/01/ELK-0026",
    name: "LED Hijau",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LEDH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LED+Hijau",
    barcode: "LEDH001BC",
  },
  {
    id: "2024/01/ELK-0027",
    name: "LED Merah",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LEDM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LED+Merah",
    barcode: "LEDM001BC",
  },
  {
    id: "2024/01/ELK-0028",
    name: "LED Kuning",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LEDK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LED+Kuning",
    barcode: "LEDK001BC",
  },
  {
    id: "2024/01/ELK-0029",
    name: "Sensor Infrared Receiver",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRIR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 3000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Infrared",
    barcode: "SNSRIR001BC",
  },
  {
    id: "2024/01/ELK-0030",
    name: "Push Button Kecil",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PBK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Push+Button",
    barcode: "PBK001BC",
  },
  {
    id: "2024/01/ELK-0031",
    name: "Module Push Button",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MPB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+Push+Button",
    barcode: "MPB001BC",
  },
  {
    id: "2024/01/ELK-0032",
    name: "Resistor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RESISTOR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 100,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Resistor",
    barcode: "RESISTOR001BC",
  },
  {
    id: "2024/01/ELK-0033",
    name: "Kapasitor 220",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KAP220001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kapasitor+220",
    barcode: "KAP220001BC",
  },
  {
    id: "2024/01/ELK-0034",
    name: "Kapasitor 100",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KAP100001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kapasitor+100",
    barcode: "KAP100001BC",
  },
  {
    id: "2024/01/ELK-0035",
    name: "Sensor Humidity",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRHUM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Humidity",
    barcode: "SNSRHUM001BC",
  },
  {
    id: "2024/01/ELK-0036",
    name: "Module Sensor Humidity",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MSNHUM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+Sensor+Humidity",
    barcode: "MSNHUM001BC",
  },
  {
    id: "2024/01/ELK-0037",
    name: "Temperature and Humidity WiFi node module",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "THWNM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Temp+Humidity+WiFi+Module",
    barcode: "THWNM001BC",
  },
  {
    id: "2024/01/ELK-0038",
    name: "Sensor vibration",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRVIB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Vibration",
    barcode: "SNSRVIB001BC",
  },
  {
    id: "2024/01/ELK-0039",
    name: "Sensor heartbeat (detak jantung)",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRHRT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Heartbeat",
    barcode: "SNSRHRT001BC",
  },
  {
    id: "2024/01/ELK-0040",
    name: "Module RGB LED",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MRGBLED001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+RGB+LED",
    barcode: "MRGBLED001BC",
  },
  {
    id: "2024/01/ELK-0041",
    name: "Modul Power Step Up Charger Boost 18650 2A",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MPSUCB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 42000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Modul+Power+Step+Up",
    barcode: "MPSUCB001BC",
  },
  {
    id: "2024/01/ELK-0042",
    name: "Color Sensor TCS-230",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "CSNSRTCS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 130000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Color+Sensor+TCS-230",
    barcode: "CSNSRTCS001BC",
  },
  {
    id: "2024/01/ELK-0043",
    name: "Step Down 12 to 5V usb",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SD12TO5V001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Step+Down+Module",
    barcode: "SD12TO5V001BC",
  },
  {
    id: "2024/01/ELK-0044",
    name: "RGB LED 4 color",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RGBLED4C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 3000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RGB+LED+4+Color",
    barcode: "RGBLED4C001BC",
  },
  {
    id: "2024/01/ELK-0045",
    name: "RGB LED 2 color",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RGBLED2C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 2000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RGB+LED+2+Color",
    barcode: "RGBLED2C001BC",
  },
  {
    id: "2024/01/ELK-0046",
    name: "Passive Buzzer",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PSVBZR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Passive+Buzzer",
    barcode: "PSVBZR001BC",
  },
  {
    id: "2024/01/ELK-0047",
    name: "Buzzer Active",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BZRAC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Buzzer+Active",
    barcode: "BZRAC001BC",
  },
  {
    id: "2024/01/ELK-0048",
    name: "Sensor Temperature LM35",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRTMPLM35001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 6000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Temperature+LM35",
    barcode: "SNSRTMPLM35001BC",
  },
  {
    id: "2024/01/ELK-0049",
    name: "Infrared receiver module",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "IRRCM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Infrared+Receiver+Module",
    barcode: "IRRCM001BC",
  },
  {
    id: "2024/01/ELK-0050",
    name: "Module RGB",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MRGB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 4900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+RGB",
    barcode: "MRGB001BC",
  },
  {
    id: "2024/01/ELK-0051",
    name: "sensor metal touch",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRMT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 12000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Metal+Touch",
    barcode: "SNSRMT001BC",
  },
  {
    id: "2024/01/ELK-0052",
    name: "modul infrared transmitter",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MIT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Modul+Infrared+Transmitter",
    barcode: "MIT001BC",
  },
  {
    id: "2024/01/ELK-0053",
    name: "modul temperature",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MTMP001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 125000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Modul+Temperature",
    barcode: "MTMP001BC",
  },
  {
    id: "2024/01/ELK-0054",
    name: "sensor magic light cup",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSMLC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Magic+Light+Cup",
    barcode: "SNSMLC001BC",
  },
  {
    id: "2024/01/ELK-0055",
    name: "sensor temperature analog",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSATMP001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Temperature+Analog",
    barcode: "SNSATMP001BC",
  },
  {
    id: "2024/01/ELK-0056",
    name: "laser transmit",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LSRTRNS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Laser+Transmit",
    barcode: "LSRTRNS001BC",
  },
  {
    id: "2024/01/ELK-0057",
    name: "module LDR",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MLDR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5800,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+LDR",
    barcode: "MLDR001BC",
  },
  {
    id: "2024/01/ELK-0058",
    name: "Photo Interup Sensor Module",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PISM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Photo+Interup+Sensor+Module",
    barcode: "PISM001BC",
  },
  {
    id: "2024/01/ELK-0059",
    name: "Obstacle avoidance",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "OA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5600,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Obstacle+Avoidance",
    barcode: "OA001BC",
  },
  {
    id: "2024/01/ELK-0060",
    name: "Sensor tracking",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRTRK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 6000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Tracking",
    barcode: "SNSRTRK001BC",
  },
  {
    id: "2024/01/ELK-0061",
    name: "sensor digital temperature",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSDTMP001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Digital+Temperature",
    barcode: "SNSDTMP001BC",
  },
  {
    id: "2024/01/ELK-0062",
    name: "IC L7805CV",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ICL7805CV001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 4000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=IC+L7805CV",
    barcode: "ICL7805CV001BC",
  },
  {
    id: "2024/01/ELK-0063",
    name: "Infrared Emiting Dioda",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "IRED001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 700,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Infrared+Emitting+Diode",
    barcode: "IRED001BC",
  },
  {
    id: "2024/01/ELK-0064",
    name: "RGB LED sensor module KS 3 color",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RGBLED3CKS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 18000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RGB+LED+Sensor+Module+KS+3+Color",
    barcode: "RGBLED3CKS001BC",
  },
  {
    id: "2024/01/ELK-0065",
    name: "IC 74HC595N",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "IC74HC595N001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1200,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=IC+74HC595N",
    barcode: "IC74HC595N001BC",
  },
  {
    id: "2024/01/ELK-0066",
    name: "Sensor APi",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSAPI001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+API",
    barcode: "SNSAPI001BC",
  },
  {
    id: "2024/01/ELK-0067",
    name: "Module RGB 7 color",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MRGB7C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 50000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+RGB+7+Color",
    barcode: "MRGB7C001BC",
  },
  {
    id: "2024/01/ELK-0068",
    name: "TILT switch",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "TILTSW001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5300,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=TILT+Switch",
    barcode: "TILTSW001BC",
  },
  {
    id: "2024/01/ELK-0069",
    name: "Hall Sensor magnetic",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "HSM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 6600,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Hall+Sensor+Magnetic",
    barcode: "HSM001BC",
  },
  {
    id: "2024/01/ELK-0070",
    name: "Mini magnetic reed sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MMRS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Mini+Magnetic+Reed+Sensor",
    barcode: "MMRS001BC",
  },
  {
    id: "2024/01/ELK-0071",
    name: "Tap Module knocking",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "TMK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Tap+Module+Knocking",
    barcode: "TMK001BC",
  },
  {
    id: "2024/01/ELK-0072",
    name: "Module RGB 2 color",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MRGB2C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+RGB+2+Color",
    barcode: "MRGB2C001BC",
  },
  {
    id: "2024/01/ELK-0073",
    name: "Mini mercury type TILT sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MMTTS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 78000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Mini+Mercury+Type+TILT+Sensor",
    barcode: "MMTTS001BC",
  },
  {
    id: "2024/01/ELK-0074",
    name: "Seven segmen kecil 1 channel",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SSK1C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 3000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Seven+Segment+Kecil",
    barcode: "SSK1C001BC",
  },
  {
    id: "2024/01/ELK-0075",
    name: "Seven segmen sedang 1 channel",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SSS1C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Seven+Segment+Sedang",
    barcode: "SSS1C001BC",
  },
  {
    id: "2024/01/ELK-0076",
    name: "Seven Segmen sedang 4 channel",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SSS4C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Seven+Segment+Sedang+4+Channel",
    barcode: "SSS4C001BC",
  },
  {
    id: "2024/01/ELK-0077",
    name: "Seven Segmen besar 4 channel",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SSB4C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5400,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Seven+Segment+Besar+4+Channel",
    barcode: "SSB4C001BC",
  },
  {
    id: "2024/01/ELK-0078",
    name: "Microphone sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MICSNS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Microphone+Sensor",
    barcode: "MICSNS001BC",
  },
  {
    id: "2024/01/ELK-0079",
    name: "Small Microphone sensor 038",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SMICSNS038001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Small+Microphone+Sensor+038",
    barcode: "SMICSNS038001BC",
  },
  {
    id: "2024/01/ELK-0080",
    name: "Sensor Hall",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSHALL001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Hall",
    barcode: "SNSHALL001BC",
  },
  {
    id: "2024/01/ELK-0081",
    name: "Sensor suara",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSSUARA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5999,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Suara",
    barcode: "SNSSUARA001BC",
  },
  {
    id: "2024/01/ELK-0082",
    name: "Potensio meter",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "POTENSIO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 2200,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Potensiometer",
    barcode: "POTENSIO001BC",
  },
  {
    id: "2024/01/ELK-0083",
    name: "Module RTC",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MODRTC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 37000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+RTC",
    barcode: "MODRTC001BC",
  },
  {
    id: "2024/01/ELK-0084",
    name: "Water sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "WTRSNS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 6500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Water+Sensor",
    barcode: "WTRSNS001BC",
  },
  {
    id: "2024/01/ELK-0085",
    name: "Driver motor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "DRVMTR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 60000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Driver+Motor",
    barcode: "DRVMTR001BC",
  },
  {
    id: "2024/01/ELK-0086",
    name: "LED matrix",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LEDMTX001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 43000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LED+Matrix",
    barcode: "LEDMTX001BC",
  },
  {
    id: "2024/01/ELK-0087",
    name: "Battery Connector",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BTCNCTR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 2500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Battery+Connector",
    barcode: "BTCNCTR001BC",
  },
  {
    id: "2024/01/ELK-0088",
    name: "Pin header male",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PHM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1800,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Pin+Header+Male",
    barcode: "PHM001BC",
  },
  {
    id: "2024/01/ATK-0007",
    name: "Pasta Processor HG GY260",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "",
    serial: "PSTPRC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 37900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Pasta+Processor",
    barcode: "PSTPRC001BC",
  },
  {
    id: "2024/01/ELK-0089",
    name: "magnetic spring",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MGSPR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 73500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Magnetic+Spring",
    barcode: "MGSPR001BC",
  },
  {
    id: "2024/01/ELK-0090",
    name: "Rotary Encoder",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RTENC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 4900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Rotary+Encoder",
    barcode: "RTENC001BC",
  },
  {
    id: "2024/01/ELK-0091",
    name: "Thermistor temperature sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "TMPSNS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 6000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Thermistor+Temperature+Sensor",
    barcode: "TMPSNS001BC",
  },
  {
    id: "2024/01/ELK-0092",
    name: "LCD Shield Kit w/ 16×2 Character Display with buttons",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LCDSK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 347000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LCD+Shield+Kit",
    barcode: "LCDSK001BC",
  },
  {
    id: "2024/01/ELK-0093",
    name: "SD card module with SPI for Arduino",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SDCM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 100000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=SD+Card+Module",
    barcode: "SDCM001BC",
  },
  {
    id: "2024/01/ELK-0094",
    name: "1 x 433Mhz receiver XY-MK-5V",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "433RX001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 4500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=433Mhz+Receiver",
    barcode: "433RX001BC",
  },
  {
    id: "2024/01/ELK-0095",
    name: "2 x nRF24L01+ modules",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "NRF24L01001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=nRF24L01+Modules",
    barcode: "NRF24L01001BC",
  },
  {
    id: "2024/01/ELK-0096",
    name: "Adafruit Bluefruit LE UART Friend",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "Adafruit",
    serial: "ADAFRUITBLE001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1377000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Adafruit+Bluefruit",
    barcode: "ADAFRUITBLE001BC",
  },
  {
    id: "2024/01/ELK-0097",
    name: "Adafruit BLE breakout with the nRF8001 module",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "Adafruit",
    serial: "ADAFRUITBLE8001001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 919300,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Adafruit+BLE+nRF8001",
    barcode: "ADAFRUITBLE8001001BC",
  },
  {
    id: "2024/01/ELK-0098",
    name: "HC-06 Bluetooth module",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "HC06BT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 21500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=HC-06+Bluetooth+Module",
    barcode: "HC06BT001BC",
  },
  {
    id: "2024/01/ELK-0099",
    name: "DHT22 sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "DHT22SNSR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=DHT22+Sensor",
    barcode: "DHT22SNSR001BC",
  },
  {
    id: "2024/01/ELK-0100",
    name: '240x320 2.2" TFT screen with the ILI9340C controller',
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "TFT240X320001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 170000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=TFT+Screen",
    barcode: "TFT240X320001BC",
  },
  {
    id: "2024/01/ELK-0101",
    name: 'Flex sensor, 2.2" (5.588cm) long',
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "FLEXSNSR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 300000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Flex+Sensor",
    barcode: "FLEXSNSR001BC",
  },
  {
    id: "2024/01/ELK-0102",
    name: "3 x TIP122 Darlington transistors",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "TIP122DT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1750,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=TIP122+Transistors",
    barcode: "TIP122DT001BC",
  },
  {
    id: "2024/01/ELK-0103",
    name: "74HC595 shift register ICs N",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "74HC595SR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1200,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=74HC595+Shift+Register",
    barcode: "74HC595SR001BC",
  },
  {
    id: "2024/01/ELK-0104",
    name: '0.56" 4-digit Seven segment clock display with I2C backpack',
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SSCDI2C001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 28000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Seven+Segment+Clock+Display",
    barcode: "SSCDI2C001BC",
  },
  {
    id: "2024/01/ELK-0105",
    name: "MM74C922 decoder IC",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MM74C922IC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 45000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=MM74C922+Decoder+IC",
    barcode: "MM74C922IC001BC",
  },
  {
    id: "2024/01/ELK-0106",
    name: "Rotary encoder",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RTENC2001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Rotary+Encoder",
    barcode: "RTENC2001BC",
  },
  {
    id: "2024/01/ELK-0107",
    name: "MPU6050 sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MPU6050SNSR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 21500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=MPU6050+Sensor",
    barcode: "MPU6050SNSR001BC",
  },
  {
    id: "2024/01/ELK-0108",
    name: "RF Relay Switch Remote Controller 433Mhz Wireless Relay 2ch Remote",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RFRSWRC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 121000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RF+Relay+Switch+Remote+Controller",
    barcode: "RFRSWRC001BC",
  },
  {
    id: "2024/01/ELK-0109",
    name: "Analog sound sensor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ASNS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Analog+Sound+Sensor",
    barcode: "ASNS001BC",
  },
  {
    id: "2024/01/ELK-0110",
    name: "Unipolar stepper motor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 100000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Unipolar+Stepper+Motor",
    barcode: "USM001BC",
  },
  {
    id: "2024/01/ELK-0111",
    name: "2 x 5V DC motors",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "5VDCM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=5V+DC+Motors",
    barcode: "5VDCM001BC",
  },
  {
    id: "2024/01/ELK-0112",
    name: "Assorted through-hole resistors",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ATHR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Assorted+Resistors",
    barcode: "ATHR001BC",
  },
  {
    id: "2024/01/ELK-0113",
    name: "L8871 motor controller",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "L8871MC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 30000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=L8871+Motor+Controller",
    barcode: "L8871MC001BC",
  },
  {
    id: "2024/01/ELK-0114",
    name: "NEMA17 stepper motor",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "NEMA17SM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 140000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=NEMA17+Stepper+Motor",
    barcode: "NEMA17SM001BC",
  },
  {
    id: "2024/01/ELK-0115",
    name: "NEOPIXEL LED MODULES 5X8",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "NEOPIXEL5X8001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 45000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=NEOPIXEL+LED+Modules",
    barcode: "NEOPIXEL5X8001BC",
  },
  {
    id: "2024/01/ELK-0116",
    name: "node mcu (ESP8266)",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "NODEMCUESP8266001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 39500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=NodeMCU+ESP8266",
    barcode: "NODEMCUESP8266001BC",
  },
  {
    id: "2024/01/ELK-0117",
    name: "ESP32 MODULE",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ESP32MODULE001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=ESP32+Module",
    barcode: "ESP32MODULE001BC",
  },
  {
    id: "2024/01/ELK-0118",
    name: "PIR",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PIR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=PIR+Sensor",
    barcode: "PIR001BC",
  },
  {
    id: "2024/01/ELK-0119",
    name: "JOYSTIK",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "JOYSTIK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 8800,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Joystick",
    barcode: "JOYSTIK001BC",
  },
  {
    id: "2024/01/ELK-0120",
    name: "MOTOR STEPER",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MTRSTP001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Motor+Stepper",
    barcode: "MTRSTP001BC",
  },
  {
    id: "2024/01/ELK-0121",
    name: "LCD 16X2",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "LCD16X2001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 13500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=LCD+16x2",
    barcode: "LCD16X2001BC",
  },
  {
    id: "2024/01/ELK-0122",
    name: "RELAY 1 CHANNEL",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RLY1CH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9300,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Relay+1+Channel",
    barcode: "RLY1CH001BC",
  },
  {
    id: "2024/01/ELK-0123",
    name: "RELAY 2 CHANNEL",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RLY2CH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Relay+2+Channel",
    barcode: "RLY2CH001BC",
  },
  {
    id: "2024/01/ELK-0124",
    name: "RELAY 4 CHANNEL",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RLY4CH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 23900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Relay+4+Channel",
    barcode: "RLY4CH001BC",
  },
  {
    id: "2024/01/ELK-0125",
    name: "MODUL DHT22",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MODDHT22001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 19000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Modul+DHT22",
    barcode: "MODDHT22001BC",
  },
  {
    id: "2024/01/ELK-0126",
    name: "SENSOR ULTRASONIK",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRULTRA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 16500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Ultrasonik",
    barcode: "SNSRULTRA001BC",
  },
  {
    id: "2024/01/ELK-0127",
    name: "FRAME ULTRASONIK",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "FRMULTRA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Frame+Ultrasonik",
    barcode: "FRMULTRA001BC",
  },
  {
    id: "2024/01/ELK-0128",
    name: "RFID SET",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "RFIDSET001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 22000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RFID+Set",
    barcode: "RFIDSET001BC",
  },
  {
    id: "2024/01/ELK-0129",
    name: "USB TYPE mini B",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USBMINIB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 7000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=USB+Type+Mini+B",
    barcode: "USBMINIB001BC",
  },
  {
    id: "2024/01/ELK-0130",
    name: "USB TYPE B",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USBB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=USB+Type+B",
    barcode: "USBB001BC",
  },
  {
    id: "2024/01/ELK-0131",
    name: "USB TYPE MIKRO",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USBMICRO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 10000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=USB+Type+Micro",
    barcode: "USBMICRO001BC",
  },
  {
    id: "2024/01/ELK-0132",
    name: "USB TYPE MIKRO 1 METER",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USBMICRO1M001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 40000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=USB+Type+Micro+1+Meter",
    barcode: "USBMICRO1M001BC",
  },
  {
    id: "2024/01/ELK-0133",
    name: "USB TYPE C",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "USBC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=USB+Type+C",
    barcode: "USBC001BC",
  },
  {
    id: "2024/01/ELK-0134",
    name: "BREADBOARD 0,3 - 0,8 MM",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BREADBOARD001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 12000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Breadboard",
    barcode: "BREADBOARD001BC",
  },
  {
    id: "2024/01/ELK-0135",
    name: "ARDUINO UNO R3",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ARDUINOUNOR3001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 99900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Arduino+Uno+R3",
    barcode: "ARDUINOUNOR3001BC",
  },
  {
    id: "2024/01/ELK-0136",
    name: "ARDUINO UNO CLON",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ARDUINOUNOCLON001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 50000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Arduino+Uno+Clon",
    barcode: "ARDUINOUNOCLON001BC",
  },
  {
    id: "2024/01/ELK-0137",
    name: "ARDUINO MEGA",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ARDUINOMEGA001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 225000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Arduino+Mega",
    barcode: "ARDUINOMEGA001BC",
  },
  {
    id: "2024/01/ELK-0138",
    name: "WEMOS D1 MINI",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "WEMOSD1MINI001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 29900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Wemos+D1+Mini",
    barcode: "WEMOSD1MINI001BC",
  },
  {
    id: "2024/01/ELK-0139",
    name: "ETHERNET SHIELD DFROBOT 21/45",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "DFROBOT",
    serial: "ETHSHIELDDFR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 345000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Ethernet+Shield+DFRobot",
    barcode: "ETHSHIELDDFR001BC",
  },
  {
    id: "2024/01/ELK-0140",
    name: "ETHERNET SHIELD 22/03",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ETHSHIELD2203001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 130000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Ethernet+Shield",
    barcode: "ETHSHIELD2203001BC",
  },
  {
    id: "2024/01/ELK-0141",
    name: "ETHERNET SHIELD 20/10",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ETHSHIELD2010001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 130000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Ethernet+Shield",
    barcode: "ETHSHIELD2010001BC",
  },
  {
    id: "2024/01/ELK-0142",
    name: "ARDUINO NANO",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ARDUINONANO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 42900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Arduino+Nano",
    barcode: "ARDUINONANO001BC",
  },
  {
    id: "2024/01/ELK-0143",
    name: "ESP32 CAM",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ESP32CAM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 95000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=ESP32+CAM",
    barcode: "ESP32CAM001BC",
  },
  {
    id: "2024/01/ELK-0144",
    name: "BOARD ESP32 CAM",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BOARDESP32CAM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 30000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Board+ESP32+CAM",
    barcode: "BOARDESP32CAM001BC",
  },
  {
    id: "2024/01/ELK-0145",
    name: "BREADBOARD POWER SUPLY",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BBPS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Breadboard+Power+Supply",
    barcode: "BBPS001BC",
  },
  {
    id: "2024/01/ELK-0146",
    name: "EKSPANSION SENSOR SHIELD",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "ESSHIELD001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 24700,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Ekspansion+Sensor+Shield",
    barcode: "ESSHIELD001BC",
  },
  {
    id: "2024/01/ELK-0147",
    name: "MODULE L298N",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "MODL298N001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 17500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Module+L298N",
    barcode: "MODL298N001BC",
  },
  {
    id: "2024/01/ELK-0148",
    name: "SENSOR SHIELD V5.0",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRSHIELDV50001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 22500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Shield+V5.0",
    barcode: "SNSRSHIELDV50001BC",
  },
  {
    id: "2024/01/ELK-0149",
    name: "SOIL MOISTURE",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SOILMOISTURE001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 13100,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Soil+Moisture+Sensor",
    barcode: "SOILMOISTURE001BC",
  },
  {
    id: "2024/01/ELK-0150",
    name: "SENSOR GAS",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SNSRGAS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Sensor+Gas",
    barcode: "SNSRGAS001BC",
  },
  {
    id: "2024/01/ELK-0151",
    name: "OLED LCD",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "OLEDLCD001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=OLED+LCD",
    barcode: "OLEDLCD001BC",
  },
  {
    id: "2024/01/ELK-0152",
    name: "SAKLAR SWITCH BESAR",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SWSB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Saklar+Switch+Besar",
    barcode: "SWSB001BC",
  },
  {
    id: "2024/01/ELK-0153",
    name: "SAKLAR SWITCH SEDANG",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SWSS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Saklar+Switch+Sedang",
    barcode: "SWSS001BC",
  },
  {
    id: "2024/01/ELK-0154",
    name: "SAKLAR SWITCH KECIL",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SWSK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 700,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Saklar+Switch+Kecil",
    barcode: "SWSK001BC",
  },
  {
    id: "2024/01/ELK-0155",
    name: "GSM-GPRS-GPS-BT-SHIELD",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "GSMGPRSGPSBTSHIELD001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 400000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=GSM-GPRS-GPS-BT-Shield",
    barcode: "GSMGPRSGPSBTSHIELD001BC",
  },
  {
    id: "2024/01/ELK-0156",
    name: "GY-NEO6MV2",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "GYNEO6MV2001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 43900,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=GY-NEO6MV2",
    barcode: "GYNEO6MV2001BC",
  },
  {
    id: "2024/01/ELK-0157",
    name: "KONEKTOR JACK",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KNKTRJACK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 2300,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Konektor+Jack",
    barcode: "KNKTRJACK001BC",
  },
  {
    id: "2024/01/ELK-0158",
    name: "SERVO",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "SERVO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 23000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Servo",
    barcode: "SERVO001BC",
  },
  {
    id: "2024/01/ELK-0159",
    name: "KABEL JUMPER MALE TO MALE",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KJM2M001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 11000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+Jumper+Male+to+Male",
    barcode: "KJM2M001BC",
  },
  {
    id: "2024/01/ELK-0160",
    name: "KABEL JUMPER MALE TO FEMALE",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KJM2F001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+Jumper+Male+to+Female",
    barcode: "KJM2F001BC",
  },
  {
    id: "2024/01/ELK-0161",
    name: "KABEL JUMPER FEMALE TO FEMALE",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "KJF2F001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 9500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+Jumper+Female+to+Female",
    barcode: "KJF2F001BC",
  },
  {
    id: "2024/01/ELK-0162",
    name: "BATERAI GP SUPER",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "GP",
    serial: "BTGPSUPER001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 8000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+GP+Super",
    barcode: "BTGPSUPER001BC",
  },
  {
    id: "2024/01/ELK-0163",
    name: "BATERAI HARVEST LIGHTING",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "Harvest Lighting",
    serial: "BTHL001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 110000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+Harvest+Lighting",
    barcode: "BTHL001BC",
  },
  {
    id: "2024/01/ELK-0164",
    name: "BATERAI LGDBHG21865",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "LG",
    serial: "BTLGDBHG21865001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 55000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+LGDBHG21865",
    barcode: "BTLGDBHG21865001BC",
  },
  {
    id: "2024/01/ELK-0165",
    name: "BATERAI WARNA BIRU",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BTWB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 55000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+Warna+Biru",
    barcode: "BTWB001BC",
  },
  {
    id: "2024/01/ELK-0166",
    name: "BATU BATERAI",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BTBT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Batu+Baterai",
    barcode: "BTBT001BC",
  },
  {
    id: "2024/01/ELK-0167",
    name: "BATERAI HOLDER 2 BESAR",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BTH2B001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 7000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+Holder+2+Besar",
    barcode: "BTH2B001BC",
  },
  {
    id: "2024/01/ELK-0168",
    name: "BATERAI HOLDER 4 KECIL",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "BTH4K001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 5000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+Holder+4+Kecil",
    barcode: "BTH4K001BC",
  },
  {
    id: "2024/01/ELK-0169",
    name: "PUSHBUTTON",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "",
    serial: "PUSHBUTTON001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Pushbutton",
    barcode: "PUSHBUTTON001BC",
  },
  {
    id: "2024/01/JAR-0014", // Diubah dari ELK
    name: "CABLE TESTER",
    type: "JAR",
    typeName: "Jaringan",
    brand: "",
    serial: "CBLTSTR001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 32000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Cable+Tester",
    barcode: "CBLTSTR001BC",
  },
  {
    id: "2024/01/JAR-0015", // Diubah dari ELK
    name: "RJ45 DATA FAST CAT 5E",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Data Fast",
    serial: "RJ45DF5E001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RJ45+Data+Fast+CAT+5E",
    barcode: "RJ45DF5E001BC",
  },
  {
    id: "2024/01/JAR-0016", // Diubah dari ELK
    name: "RJ45 AMP CAT 6",
    type: "JAR",
    typeName: "Jaringan",
    brand: "AMP",
    serial: "RJ45AMP6001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 150000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=RJ45+AMP+CAT+6",
    barcode: "RJ45AMP6001BC",
  },
  {
    id: "2024/01/ATK-0008",
    name: "JOINWIT CATV/FTTH Tool Kit SET Lengkap OPM VFL Cleaver FO",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Joinwit",
    serial: "JWTOOLKIT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 1000000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Joinwit+Tool+Kit",
    barcode: "JWTOOLKIT001BC",
  },
  {
    id: "2024/01/ELK-0173",
    name: "Baterai alkaline",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "Alkaline",
    serial: "BTALK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 60000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Baterai+Alkaline",
    barcode: "BTALK001BC",
  },
  {
    id: "2024/01/JAR-0017", // Diubah dari ELK
    name: "Connector FO",
    type: "JAR",
    typeName: "Jaringan",
    brand: "",
    serial: "CNCTFO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 40000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Connector+FO",
    barcode: "CNCTFO001BC",
  },
  {
    id: "2024/01/ATK-0009",
    name: "Cable Tis Putih",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "Cavanni",
    serial: "CTP001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Cable+Tis+Putih",
    barcode: "CTP001BC",
  },
  {
    id: "2024/01/ATK-0010",
    name: "Cable Tis Hitam",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "",
    serial: "CTH001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 20000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Cable+Tis+Hitam",
    barcode: "CTH001BC",
  },
  {
    id: "2024/01/JAR-0018", // Diubah dari ELK
    name: "KONEKTOR VENTION ABU",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Vention",
    serial: "KNKTRVENTABU001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 22000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Konektor+Vention+Abu",
    barcode: "KNKTRVENTABU001BC",
  },
  {
    id: "2024/01/JAR-0019", // Diubah dari ELK
    name: "KONEKTOR VENTION HITAM",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Vention",
    serial: "KNKTRVENTHITAM001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 15000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Konektor+Vention+Hitam",
    barcode: "KNKTRVENTHITAM001BC",
  },
  {
    id: "2024/01/LAN-0004",
    name: "AL-QUR'AN MUSHAF TILAWAH",
    type: "LAN",
    typeName: "Lainnya",
    brand: "Cordova",
    serial: "ALQURAN001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 69500,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Al-Quran",
    barcode: "ALQURAN001BC",
  },
  {
    id: "2024/01/ELK-0177",
    name: "Trainer IoT MC KIT ESP-32",
    type: "ELK",
    typeName: "Elektronik Umum", // Diubah
    brand: "monsterchip",
    serial: "TRNIOTMCKIT001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 490000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Trainer+IoT+MC+KIT+ESP-32",
    barcode: "TRNIOTMCKIT001BC",
  },
  {
    id: "2024/01/KOM-0012", // Diubah dari ELK
    name: "Port USB",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "Vention",
    serial: "PORTUSB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 60000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Port+USB",
    barcode: "PORTUSB001BC",
  },
  {
    id: "2024/01/JAR-0020", // Diubah dari ELK
    name: "FTTH TOOL Handheld Optical Power Meter JW3208 Manual",
    type: "JAR",
    typeName: "Jaringan",
    brand: "Joinwit",
    serial: "FTTHTOOLJW3208001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 690000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=FTTH+Tool+Optical+Power+Meter",
    barcode: "FTTHTOOLJW3208001BC",
  },
  {
    id: "2024/01/KOM-0013", // Diubah dari ELK
    name: "Motherboard",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "ASRock",
    serial: "MBASROCK001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Motherboard",
    barcode: "MBASROCK001BC",
  },
  {
    id: "2024/01/LAN-0005",
    name: "Vacuum Cleaner",
    type: "LAN",
    typeName: "Lainnya",
    brand: "",
    serial: "VC001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 0, // Harga tidak tersedia di CSV
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Vacuum+Cleaner",
    barcode: "VC001BC",
  },
  {
    id: "2024/01/KOM-0014", // Diubah dari ELK
    name: "Cooling Fan",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "CLGFAN001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 27000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image: "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Cooling+Fan",
    barcode: "CLGFAN001BC",
  },
  {
    id: "2024/01/JAR-0021", // Diubah dari ELK
    name: "Router AX1500 NextGen",
    type: "JAR",
    typeName: "Jaringan",
    brand: "tp-link",
    serial: "RTRTPAX1500001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 520000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Router+AX1500",
    barcode: "RTRTPAX1500001BC",
  },
  {
    id: "2024/01/JAR-0022", // Diubah dari ELK
    name: "Fiber Optic 50 meter",
    type: "JAR",
    typeName: "Jaringan",
    brand: "",
    serial: "FO50M001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 60000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Fiber+Optic+50m",
    barcode: "FO50M001BC",
  },
  {
    id: "2024/01/JAR-0023", // Diubah dari ELK
    name: "Router A10WR4EB",
    type: "JAR",
    typeName: "Jaringan",
    brand: "HONOR",
    serial: "RTRHONORA10WR4EB001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 760000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Router+Honor",
    barcode: "RTRHONORA10WR4EB001BC",
  },
  {
    id: "2024/01/KOM-0015", // Diubah dari ELK
    name: "Cooling Fan DC825BJ DC 12V 0.25A",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "CLGFANDC825BJ001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 25000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Cooling+Fan+DC825BJ",
    barcode: "CLGFANDC825BJ001BC",
  },
  {
    id: "2024/01/KOM-0016", // Diubah dari ELK
    name: "Power Supply SB-380W (DN)",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "PSUSB380W001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 155000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Power+Supply+SB-380W",
    barcode: "PSUSB380W001BC",
  },
  {
    id: "2024/01/LAN-0006",
    name: "Taplak Mouse",
    type: "LAN",
    typeName: "Lainnya",
    brand: "",
    serial: "TPLKMS001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 7000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Taplak+Mouse",
    barcode: "TPLKMS001BC",
  },
  {
    id: "2024/01/ATK-0011",
    name: "Obeng Set Multifungsi 16 in 1",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "XinRui",
    serial: "OBSM16IN1001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 57000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Obeng+Set+Multifungsi",
    barcode: "OBSM16IN1001BC",
  },
  {
    id: "2024/01/ATK-0012",
    name: "iFixit Pro Tech Toolkit - Repair Kit, original USA",
    type: "ATK",
    typeName: "Alat & Perkakas", // Diubah
    brand: "iFixit",
    serial: "IFIXITPRO001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 2119000,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=iFixit+Pro+Tech+Toolkit",
    barcode: "IFIXITPRO001BC",
  },
  {
    id: "2024/01/KOM-0017", // Diubah dari ELK
    name: "Kabel Power CPU",
    type: "KOM",
    typeName: "Komputer & Periferal",
    brand: "",
    serial: "KBLCPU001",
    location: "",
    condition: "Baik",
    status: "Tersedia",
    price: 8200,
    purchaseDate: "2024-01-01",
    dateAdded: "2024-01-01",
    image:
      "https://via.placeholder.com/400x300/e2e8f0/64748b?text=Kabel+Power+CPU",
    barcode: "KBLCPU001BC",
  },
];

let borrowings = [
  {
    id: "BRW-001",
    borrower: "Dr. Budi Santoso",
    borrowerRole: "Dosen",
    asset: "Proyektor Epson",
    assetId: "2024/01/ELK-0002",
    borrowDate: "2024-01-20",
    returnDate: "2024-01-25",
    actualReturnDate: null,
    status: "Aktif",
    purpose: "Presentasi di Laboratorium",
  },
  {
    id: "BRW-002",
    borrower: "Ahmad Rahman",
    borrowerRole: "Mahasiswa",
    asset: "Laptop Dell",
    assetId: "2024/01/ELK-0003",
    borrowDate: "2024-01-18",
    returnDate: "2024-01-22",
    actualReturnDate: "2024-01-22",
    status: "Selesai",
    purpose: "Tugas akhir",
  },
];

let maintenanceRecords = [
  {
    id: "MNT-001",
    assetId: "2024/01/FUR-0001",
    assetName: "Meja Kerja",
    type: "Corrective",
    date: "2024-01-25",
    cost: 150000,
    description: "Perbaikan kaki meja yang goyang",
    status: "Selesai",
    technician: "Pak Bambang",
  },
];

let users = [
  {
    id: 1,
    name: "Administrator",
    username: "admin",
    level: "Admin",
    status: "Aktif",
    avatar: "assets/admin.png",
    email: "admin@stti.ac.id",
  },
  {
    id: 2,
    name: "Staff Sarpras",
    username: "sarpras",
    level: "Sarpras",
    status: "Aktif",
    avatar: "assets/sarpras.png",
    email: "sarpras@stti.ac.id",
  },
  {
    id: 3,
    name: "Muhammad Sugiarto, S.E., M.M.",
    username: "rektor",
    level: "Rektor",
    status: "Aktif",
    avatar: "assets/rektor.png",
    email: "rektor@stti.ac.id",
  },
  {
    id: 4,
    name: "Bima Azis Kusuma, S.T., M.T.",
    username: "kaprodi",
    level: "kaprodi",
    status: "Aktif",
    avatar: "assets/kaprodi.png",
    email: "kaprodi@stti.ac.id",
  },
  {
    id: 5,
    name: "Mrs. Nazilah",
    username: "keuangan",
    level: "keuangan",
    status: "Aktif",
    avatar: "assets/keuangan.png",
    email: "mrsnazilah@stti.ac.id",
  },
];

let requests = [
  {
    id: "REQ-001",
    requester: "Angela Cristy",
    asset: "Komputer Desktop",
    type: "ELK",
    quantity: 5,
    requestDate: "2024-01-22",
    status: "Pending",
    reason: "Untuk keperluan lab komputer yang baru",
  },
  {
    id: "REQ-002",
    requester: "Budi Darsono",
    asset: "Printer Laser",
    type: "ELK",
    quantity: 2,
    requestDate: "2024-01-21",
    status: "Disetujui",
    reason: "Untuk keperluan administrasi prodi",
  },
];

// User permissions
const userPermissions = {
  Admin: [
    "dashboard",
    "assets",
    "borrowing",
    "maintenance",
    "users",
    "requests",
    "reports",
  ],
  Sarpras: ["dashboard", "assets", "borrowing", "maintenance", "reports"],
  Rektor: ["dashboard", "reports"],
  Kaprodi: ["dashboard", "requests", "reports"],
  Keuangan: ["dashboard", "requests", "reports"],
};

let currentUser = null;
let currentUserLevel = null;
let nextAssetCounter = 3;
let nextBorrowCounter = 3;
let nextMaintenanceCounter = 2;
let nextUserCounter = 4;
let nextRequestCounter = 3;
let editingAssetId = null;
let currentUserAvatar = null;
let currentReportType = null;
let currentReportData = null;
let isDesktop = window.innerWidth >= 1024;

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

function generateAssetId(type) {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const counter = (nextAssetCounter++).toString().padStart(4, "0");
  return `${year}/${month}/${type}-${counter}`;
}

function generateBorrowId() {
  return `BRW-${(nextBorrowCounter++).toString().padStart(3, "0")}`;
}

function generateMaintenanceId() {
  return `MNT-${(nextMaintenanceCounter++).toString().padStart(3, "0")}`;
}

function generateRequestId() {
  return `REQ-${(nextRequestCounter++).toString().padStart(3, "0")}`;
}

function showToast(message, type = "success") {
  // Create toast element if not exists
  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
        `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-message toast-${type}`;
  toast.style.cssText = `
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#f59e0b"
        };
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        margin-bottom: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.style.transform = "translateX(0)";
  }, 100);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

function showLoading() {
  let loadingOverlay = document.getElementById("loadingOverlay");
  if (!loadingOverlay) {
    loadingOverlay = document.createElement("div");
    loadingOverlay.id = "loadingOverlay";
    loadingOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
    loadingOverlay.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; text-align: center;">
                <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
                <p>Memproses...</p>
            </div>
        `;
    document.body.appendChild(loadingOverlay);
  }
  loadingOverlay.style.display = "flex";
}

function hideLoading() {
  const loadingOverlay = document.getElementById("loadingOverlay");
  if (loadingOverlay) {
    loadingOverlay.style.display = "none";
  }
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll(
    "input[required], select[required], textarea[required]"
  );
  let isValid = true;

  inputs.forEach((input) => {
    const errorElement = document.getElementById(`${input.id}Error`);

    if (!input.value) {
      if (errorElement) {
        errorElement.textContent = "Field ini wajib diisi";
        errorElement.style.display = "block";
      }
      input.classList.add("error");
      isValid = false;
    } else {
      if (errorElement) {
        errorElement.style.display = "none";
      }
      input.classList.remove("error");
    }

    // Additional validation for specific fields
    if (input.id === "assetPrice" && input.value < 1000) {
      if (errorElement) {
        errorElement.textContent = "Harga minimal 1000";
        errorElement.style.display = "block";
      }
      input.classList.add("error");
      isValid = false;
    }

    if (input.id === "userPassword" && input.value.length < 6) {
      if (errorElement) {
        errorElement.textContent = "Password minimal 6 karakter";
        errorElement.style.display = "block";
      }
      input.classList.add("error");
      isValid = false;
    }
  });

  return isValid;
}

function previewImage(inputElement, previewElementId) {
  const preview = document.getElementById(previewElementId);
  if (!preview) return;

  const file = inputElement.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 8px;">`;
    };

    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "";
  }
}

// Function to dynamically load external scripts
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Authentication Functions
// Modifikasi fungsi login untuk memastikan chart dimuat setelah login
function enhancedLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validCredentials = [
    {
      username: "admin",
      password: "admin123",
      name: "Administrator",
      level: "Admin",
      avatar: "assets/admin.png",
    },
    {
      username: "sarpras",
      password: "sarpras123",
      name: "Staff Sarpras",
      level: "Sarpras",
      avatar: "assets/sarpras.png",
    },
    {
      username: "kaprodi",
      password: "kaprodi123",
      name: "Bima Azis Kusuma, S.T., M.T.",
      level: "Kaprodi",
      avatar: "assets/kaprodi.png",
    },
    {
      username: "keuangan",
      password: "keuangan123",
      name: "Staff Keuangan",
      level: "Keuangan",
      avatar: "assets/keuangan.png",
    },
    {
      username: "rektor",
      password: "rektor123",
      name: "Muhammad Sugiarto, S.E., M.M.",
      level: "Rektor",
      avatar: "assets/rektor.png",
    },
  ];

  const user = validCredentials.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    currentUser = user.name;
    currentUserLevel = user.level;
    currentUserAvatar = user.avatar;

    // Update UI with user info
    const currentUserElement = document.getElementById("currentUser");
    const userRoleElement = document.getElementById("userRole");
    const userAvatarImg = document.getElementById("userAvatarImg");

    if (currentUserElement) currentUserElement.textContent = currentUser;
    if (userRoleElement) userRoleElement.textContent = user.level;
    if (userAvatarImg) userAvatarImg.src = user.avatar;

    // Hide login, show dashboard
    const loginPage = document.getElementById("loginPage");
    const dashboard = document.getElementById("dashboard");

    if (loginPage) loginPage.style.display = "none";
    if (dashboard) dashboard.style.display = "block";

    // Setup navigation based on permissions
    setupNavigation();
    showPage("dashboard");
    updateStatistics();
    // Memuat data dan chart untuk dashboard
    loadRecentAssets();
    initAssetChart();

    /* Inisialisasi chart setelah dashboard ditampilkan
    setTimeout(() => {
      console.log("Menginisialisasi chart...");
      initAssetChart();

      // Inisialisasi DataTables juga
      if (typeof $ !== "undefined" && $.fn.DataTable) {
        initDataTables();
      } else {
        console.warn("jQuery atau DataTables belum dimuat");
      }
    }, 1000); */

    showToast(`Selamat datang, ${currentUser}!`);
  } else {
    showToast("Username atau password salah!", "error");
  }
}

function logout() {
  currentUser = null;
  currentUserLevel = null;

  const loginPage = document.getElementById("loginPage");
  const dashboard = document.getElementById("dashboard");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  if (loginPage) loginPage.style.display = "flex";
  if (dashboard) dashboard.style.display = "none";
  if (usernameField) usernameField.value = "";
  if (passwordField) passwordField.value = "";

  showToast("Berhasil logout");
}

function setupNavigation() {
  const allowedPages = userPermissions[currentUserLevel] || [];
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const page = link.getAttribute("data-page");
    if (allowedPages.includes(page)) {
      link.style.display = "flex";
    } else {
      link.style.display = "none";
    }
  });
}

// Navigation Functions
function showPage(pageId) {
  // Check permissions
  const allowedPages = userPermissions[currentUserLevel] || [];
  if (!allowedPages.includes(pageId)) {
    showToast("Anda tidak memiliki akses ke halaman ini", "error");
    return;
  }

  // Sembunyikan semua konten halaman
  const pages = document.querySelectorAll(".page-content");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Tampilkan halaman yang dipilih
  const targetPage = document.getElementById(pageId + "Content");
  if (targetPage) {
    targetPage.style.display = "block";
    targetPage.classList.add("animate-fade-in");

    // Remove animation class after animation completes
    setTimeout(() => {
      targetPage.classList.remove("animate-fade-in");
    }, 500);
  }

  // Setup horizontal scroll for the new page after a short delay
  setTimeout(() => {
    setupHorizontalScroll();
    // Show scroll hint for the new page
    showHorizontalScrollHint();
  }, 500);

  // Update footer stats when changing pages
  setTimeout(updateFooterStats, 100);

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(`[data-page="${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }

  // Update page title
  const titles = {
    dashboard: "Dashboard",
    assets: "Manajemen Aset",
    borrowing: "Peminjaman",
    maintenance: "Pemeliharaan",
    users: "Pengguna",
    requests: "Pengajuan Aset",
    reports: "Laporan",
  };

  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) {
    pageTitle.textContent = titles[pageId] || pageId;
  }

  // Load data for specific pages
  switch (pageId) {
    case "assets":
      loadAssetsTable();
      addSearchHighlightStyle();
      break;
    case "borrowing":
      loadBorrowingTable();
      loadAvailableAssets();
      break;
    case "maintenance":
      loadMaintenanceTable();
      loadAssetsForMaintenance();
      break;
    case "users":
      loadUsersTable();
      break;
    case "requests":
      loadRequestsTable();
      break;
  }

  // Pada tampilan mobile, tutup sidebar setelah memilih halaman
  if (window.innerWidth < 1024) {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuToggle = document.getElementById("menuToggle");

    if (sidebar && overlay && menuToggle) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");

      // Kembalikan icon menu ke hamburger
      menuToggle.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    }
  }

  // On mobile, close sidebar after selecting a page
  /*if (!isDesktop) {
    toggleSidebar();
  }*/
}

// Improved Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");

  if (!sidebar || !overlay || !menuToggle) return;

  const isCurrentlyOpen = sidebar.classList.contains("active");

  if (isCurrentlyOpen) {
    // Close sidebar
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    // Kembalikan icon menu ke hamburger
    menuToggle.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  } else {
    // Buka sidebar
    sidebar.classList.add("active");
    overlay.classList.add("active");

    // Ubah icon menu menjadi X
    menuToggle.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  }

  /* Add smooth transition effect
  sidebar.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
  mainContent.style.transition =
    "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"; */
}

function setupOverlayClick() {
  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById("sidebar");
  if (!overlay || !sidebar) return;

  overlay.addEventListener("click", function () {
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      updateMenuToggleIcon(false);
    }
  });
}

// Fungsi untuk menutup sidebar ketika item menu diklik (di tampilan mobile)
function setupMenuItemsClick() {
  const menuItems = document.querySelectorAll(".nav-link");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");

  if (!menuItems.length || !sidebar || !overlay || !menuToggle) return;

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Hanya tutup sidebar di tampilan mobile
      if (window.innerWidth < 1024 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");

        // Kembalikan icon menu ke hamburger
        menuToggle.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });
  });
}

function handleResize() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  if (!sidebar || !mainContent) return;

  const newIsDesktop = window.innerWidth >= 1024;

  // Hanya jalankan jika ada perubahan mode (desktop ke mobile atau sebaliknya)
  if (newIsDesktop !== isDesktop) {
    isDesktop = newIsDesktop; // Perbarui variabel global

    if (isDesktop) {
      // Jika beralih ke tampilan desktop
      sidebar.classList.add("collapsed");
      mainContent.classList.add("sidebar-collapsed");
      sidebar.classList.remove("active"); // Hapus kelas 'active' dari mode mobile
    } else {
      // Jika beralih ke tampilan mobile
      sidebar.classList.remove("collapsed", "active");
      mainContent.classList.remove("sidebar-collapsed");
    }
  }
}

// Letakkan fungsi initializeSidebar() Anda di bawah sini...
function initializeSidebar() {
  // ...isi fungsi Anda yang sudah ada
}

// Enhanced sidebar initialization
// Inisialisasi lengkap dengan penanganan semua skenario
function initializeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const menuToggle = document.getElementById("menuToggle");

  if (!sidebar || !mainContent || !menuToggle) return;

  // Check if desktop or mobile
  isDesktop = window.innerWidth >= 1024;

  if (isDesktop) {
    // Desktop: sidebar always visible, start in collapsed mode
    sidebar.classList.add("collapsed");
    mainContent.classList.add("sidebar-collapsed");
    updateMenuToggleIcon(true);
  } else {
    // Mobile: sidebar hidden by default
    sidebar.classList.remove("active", "collapsed");
    mainContent.classList.remove("sidebar-collapsed");
    updateMenuToggleIcon(false);
  }

  // Add event listeners
  menuToggle.addEventListener("click", toggleSidebar);

  // Handle responsive behavior on window resize
  window.addEventListener("resize", handleResize);

  // Close sidebar when clicking outside (mobile only)
  document.addEventListener("click", function (event) {
    if (!isDesktop) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);

      if (
        !isClickInsideSidebar &&
        !isClickOnToggle &&
        sidebar.classList.contains("active")
      ) {
        toggleSidebar();
      }
    }
  });

  // Add keyboard support
  menuToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Global keyboard shortcut (Ctrl+B)
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Hide hint when user starts interacting
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
      const hintElement = document.getElementById("horizontalScrollHint");
      if (hintElement) {
        hintElement.classList.remove("show");
      }
    }
  });

  document.addEventListener(
    "wheel",
    (event) => {
      if (event.shiftKey) {
        const hintElement = document.getElementById("horizontalScrollHint");
        if (hintElement) {
          hintElement.classList.remove("show");
        }
      }
    },
    { passive: true }
  );
}

// [TAMBAHKAN fungsi untuk memeriksa tabel individual]
function setupTableScrollHints() {
  const tables = document.querySelectorAll(".data-table");

  tables.forEach((table) => {
    if (table.scrollWidth > table.clientWidth) {
      const tableContainer = table.closest(".data-table-container");
      if (tableContainer) {
        // Add a small indicator near the table
        const existingHint = tableContainer.querySelector(".table-scroll-hint");
        if (!existingHint) {
          const tableHint = document.createElement("div");
          tableHint.className = "table-scroll-hint";
          tableHint.innerHTML = "↔️ Geser untuk melihat lebih banyak";
          tableContainer.appendChild(tableHint);

          // Auto-hide table hint
          setTimeout(() => {
            tableHint.style.opacity = "0";
            setTimeout(() => tableHint.remove(), 300);
          }, 3000);
        }
      }
    }
  });
}

// Enhanced toggle function for desktop collapse mode
function toggleSidebarCollapse() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const menuToggle = document.getElementById("menuToggle");

  if (!sidebar || window.innerWidth < 1024) return;

  const isCollapsed = sidebar.classList.contains("collapsed");

  if (isCollapsed) {
    // Expand sidebar
    sidebar.classList.remove("collapsed");
    mainContent.classList.add("sidebar-open");

    menuToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
  } else {
    // Collapse sidebar
    sidebar.classList.add("collapsed");
    mainContent.classList.remove("sidebar-open");

    menuToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
  }
}

function toggleSidebar() {
  if (window.innerWidth < 1024) {
    toggleMobileSidebar();
  } else {
    toggleDesktopSidebar();
  }
}

function toggleDesktopSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  if (!sidebar || !mainContent) return;

  const isCollapsed = sidebar.classList.contains("collapsed");

  if (isCollapsed) {
    // Expand sidebar
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("sidebar-collapsed");
    updateMenuToggleIcon(false);
  } else {
    // Collapse sidebar
    sidebar.classList.add("collapsed");
    mainContent.classList.add("sidebar-collapsed");
    updateMenuToggleIcon(true);
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;

  const isActive = sidebar.classList.contains("active");
  if (isActive) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }
  updateMenuToggleIcon(isActive);
}

// Fungsi baru untuk mengupdate icon menu toggle
function updateMenuToggleIcon(isCollapsed) {
  const menuToggle = document.getElementById("menuToggle");
  if (!menuToggle) return;

  if (isCollapsed) {
    // Show hamburger icon (three lines)
    menuToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
  } else {
    // Show close icon (X)
    menuToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
  }
}

// Inisialisasi chart aset - DIPERBAIKI
function initAssetChart() {
  // Pastikan Chart.js sudah dimuat terlebih dahulu
  if (typeof Chart === "undefined") {
    console.warn("Chart.js belum dimuat, mencoba memuat...");
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/chart.js/3.9.1/chart.min.js"
    )
      .then(() => {
        console.log("Chart.js berhasil dimuat");
        setTimeout(() => initAssetChart(), 500);
      })
      .catch((error) => {
        console.error("Gagal memuat Chart.js:", error);
        showToast("Gagal memuat library chart", "error");
      });
    return;
  }

  const chartElement = document.getElementById("assetChart");
  if (!chartElement) {
    console.error("Element canvas #assetChart tidak ditemukan");
    return;
  }

  const ctx = chartElement.getContext("2d");
  if (!ctx) {
    console.error("Gagal mendapatkan context 2D dari canvas");
    return;
  }

  // Hitung data untuk chart
  const totalAssets = assets.length;
  const borrowedAssets = assets.filter(
    (asset) => asset.status === "Dipinjam"
  ).length;
  const availableAssets = assets.filter(
    (asset) => asset.status === "Tersedia"
  ).length;
  const maintenanceAssets = assets.filter(
    (asset) => asset.status === "Maintenance"
  ).length;

  console.log("Data chart:", {
    total: totalAssets,
    available: availableAssets,
    borrowed: borrowedAssets,
    maintenance: maintenanceAssets,
  });

  // Hancurkan chart yang ada jika sudah ada
  if (window.assetChartInstance) {
    window.assetChartInstance.destroy();
  }

  // Buat chart baru
  try {
    window.assetChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Tersedia", "Dipinjam", "Maintenance"],
        datasets: [
          {
            label: "Jumlah Aset",
            data: [availableAssets, borrowedAssets, maintenanceAssets],
            backgroundColor: [
              "#10b981", // Hijau untuk tersedia
              "#f59e0b", // Kuning untuk dipinjam
              "#ef4444", // Merah untuk maintenance
            ],
            borderColor: ["#059669", "#d97706", "#dc2626"],
            borderWidth: 2,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 12,
                color: getComputedStyle(document.body).getPropertyValue(
                  "--text-primary"
                ), // Dynamic color
              },
            },
          },
          title: {
            display: true,
            text: "Distribusi Status Aset",
            font: {
              size: 16,
              weight: "bold",
              color: getComputedStyle(document.body).getPropertyValue(
                "--text-primary"
              ), // Dynamic color
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage =
                  total > 0 ? Math.round((value / total) * 100) : 0;
                return `${label}: ${value} aset (${percentage}%)`;
              },
            },
          },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
          duration: 1000,
        },
        cutout: "50%",
      },
    });

    console.log("Chart berhasil dibuat:", window.assetChartInstance);
  } catch (error) {
    console.error("Error membuat chart:", error);
    showToast("Gagal membuat chart", "error");
  }
}

// Fungsi untuk memperbarui chart ketika data berubah
function updateAssetChart() {
  if (!window.assetChartInstance) {
    console.warn("Chart belum diinisialisasi, menginisialisasi...");
    initAssetChart();
    return;
  }

  // Hitung ulang data
  const borrowedAssets = assets.filter(
    (asset) => asset.status === "Dipinjam"
  ).length;
  const availableAssets = assets.filter(
    (asset) => asset.status === "Tersedia"
  ).length;
  const maintenanceAssets = assets.filter(
    (asset) => asset.status === "Maintenance"
  ).length;

  // Update data chart
  window.assetChartInstance.data.datasets[0].data = [
    availableAssets,
    borrowedAssets,
    maintenanceAssets,
  ];

  // Update legend and title colors for dark mode
  window.assetChartInstance.options.plugins.legend.labels.color =
    getComputedStyle(document.body).getPropertyValue("--text-primary");
  window.assetChartInstance.options.plugins.title.font.color = getComputedStyle(
    document.body
  ).getPropertyValue("--text-primary");

  // Refresh chart
  window.assetChartInstance.update("active");

  console.log("Chart berhasil diupdate");
}

// Inisialisasi DataTables
function initDataTables() {
  // Konfigurasi bahasa Indonesia yang konsisten
  const indonesianLanguage = {
    search: "Cari:",
    lengthMenu: "Tampilkan _MENU_ data per halaman",
    info: "Menampilkan _START_ hingga _END_ dari _TOTAL_ data",
    infoEmpty: "Menampilkan 0 hingga 0 dari 0 data",
    infoFiltered: "(difilter dari _MAX_ total data)",
    zeroRecords: "Tidak ada data yang ditemukan",
    emptyTable: "Tidak ada data tersedia dalam tabel",
    loadingRecords: "Memuat...",
    processing: "Sedang memproses...",
    paginate: {
      first: "Pertama",
      last: "Terakhir",
      next: "Selanjutnya",
      previous: "Sebelumnya",
    },
    aria: {
      sortAscending: ": aktifkan untuk mengurutkan kolom naik",
      sortDescending: ": aktifkan untuk mengurutkan kolom turun",
    },
  };

  // Konfigurasi umum untuk semua tabel
  const commonConfig = {
    language: indonesianLanguage,
    responsive: true,
    autoWidth: false,
    pageLength: 10,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "Semua"],
    ],
    dom: '<"d-flex justify-content-between align-items-center mb-3"<"d-flex align-items-center"l><"d-flex align-items-center"f>>rtip',
    order: [[0, "desc"]], // Default sort by first column descending
  };

  // Inisialisasi DataTable untuk tabel aset
  if ($.fn.DataTable.isDataTable("#assetsTable")) {
    $("#assetsTable").DataTable().destroy();
  }
  $("#assetsTable").DataTable({
    ...commonConfig,
    columnDefs: [
      { orderable: false, targets: -1 }, // Disable ordering on action column
      { width: "10%", targets: 0 }, // ID Aset
      { width: "20%", targets: 1 }, // Nama Aset dengan gambar
      { width: "12%", targets: 2 }, // Jenis
      { width: "12%", targets: 3 }, // Merek
      { width: "12%", targets: 4 }, // Lokasi
      { width: "10%", targets: 5 }, // Status
      { width: "10%", targets: 6 }, // Kondisi
      { width: "12%", targets: 7 }, // Harga
      { width: "12%", targets: 8 }, // Aksi
    ],
    order: [[0, "desc"]], // Sort by ID Aset descending
  });

  // Inisialisasi DataTable untuk tabel peminjaman
  if ($.fn.DataTable.isDataTable("#borrowingTable")) {
    $("#borrowingTable").DataTable().destroy();
  }
  $("#borrowingTable").DataTable({
    ...commonConfig,
    columnDefs: [
      { orderable: false, targets: -1 }, // Disable ordering on action column
      { width: "12%", targets: 0 }, // ID Peminjaman
      { width: "20%", targets: 1 }, // Peminjam
      { width: "18%", targets: 2 }, // Aset
      { width: "12%", targets: 3 }, // Tanggal Pinjam
      { width: "12%", targets: 4 }, // Tanggal Kembali
      { width: "10%", targets: 5 }, // Status
      { width: "16%", targets: 6 }, // Aksi
    ],
    order: [[3, "desc"]], // Sort by tanggal pinjam descending
  });

  // Inisialisasi DataTable untuk tabel pemeliharaan
  if ($.fn.DataTable.isDataTable("#maintenanceTable")) {
    $("#maintenanceTable").DataTable().destroy();
  }
  $("#maintenanceTable").DataTable({
    ...commonConfig,
    columnDefs: [
      { orderable: false, targets: -1 }, // Disable ordering on action column
      { width: "12%", targets: 0 }, // ID Maintenance
      { width: "20%", targets: 1 }, // Nama Aset
      { width: "15%", targets: 2 }, // Jenis Pemeliharaan
      { width: "12%", targets: 3 }, // Tanggal
      { width: "15%", targets: 4 }, // Biaya
      { width: "10%", targets: 5 }, // Status
      { width: "16%", targets: 6 }, // Aksi
    ],
    order: [[3, "desc"]], // Sort by tanggal descending
  });

  // Inisialisasi DataTable untuk tabel pengguna
  if ($.fn.DataTable.isDataTable("#usersTable")) {
    $("#usersTable").DataTable().destroy();
  }
  $("#usersTable").DataTable({
    ...commonConfig,
    columnDefs: [
      { orderable: false, targets: [1, -1] }, // Disable ordering on avatar and action columns
      { width: "8%", targets: 0 }, // ID
      { width: "10%", targets: 1 }, // Avatar
      { width: "25%", targets: 2 }, // Nama
      { width: "15%", targets: 3 }, // Username
      { width: "12%", targets: 4 }, // Level
      { width: "10%", targets: 5 }, // Status
      { width: "20%", targets: 6 }, // Aksi
    ],
    order: [[0, "asc"]], // Sort by ID ascending
  });

  // Inisialisasi DataTable untuk tabel pengajuan
  if ($.fn.DataTable.isDataTable("#requestsTable")) {
    $("#requestsTable").DataTable().destroy();
  }
  $("#requestsTable").DataTable({
    ...commonConfig,
    columnDefs: [
      { orderable: false, targets: -1 }, // Disable ordering on action column
      { width: "12%", targets: 0 }, // ID Request
      { width: "20%", targets: 1 }, // Pemohon
      { width: "18%", targets: 2 }, // Aset
      { width: "10%", targets: 3 }, // Jumlah
      { width: "12%", targets: 4 }, // Tanggal Request
      { width: "10%", targets: 5 }, // Status
      { width: "18%", targets: 6 }, // Aksi
    ],
    order: [[4, "desc"]], // Sort by tanggal request descending
  });

  // Inisialisasi DataTable untuk tabel aset terbaru di dashboard
  if ($.fn.DataTable.isDataTable("#recentAssetsTable")) {
    $("#recentAssetsTable").DataTable().destroy();
  }
  $("#recentAssetsTable").DataTable({
    language: indonesianLanguage,
    responsive: true,
    autoWidth: false,
    paging: false,
    searching: false,
    info: false,
    ordering: false,
    columnDefs: [
      { width: "15%", targets: 0 }, // ID Aset
      { width: "25%", targets: 1 }, // Nama Aset
      { width: "15%", targets: 2 }, // Jenis
      { width: "15%", targets: 3 }, // Lokasi
      { width: "12%", targets: 4 }, // Status
      { width: "18%", targets: 5 }, // Tanggal Ditambahkan
    ],
  });

  // Custom styling untuk DataTables
  addDataTableStyles();

  console.log("DataTables berhasil diinisialisasi untuk semua tabel");
}

// Function to add custom styles for DataTables
function addDataTableStyles() {
  if (!document.getElementById("dataTablesCustomStyle")) {
    const style = document.createElement("style");
    style.id = "dataTablesCustomStyle";
    style.textContent = `
      /* DataTables Custom Styling */
      .dataTables_wrapper {
        margin-bottom: 1rem;
      }
      
      .dataTables_length select {
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 0.375rem 0.75rem;
        background-color: var(--card-bg); /* Changed to card-bg */
        color: var(--text-primary);
        margin: 0 0.5rem;
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }
      
      .dataTables_filter input {
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 0.375rem 0.75rem;
        background-color: var(--card-bg); /* Changed to card-bg */
        color: var(--text-primary);
        margin-left: 0.5rem;
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }
      
      .dataTables_filter input:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
      
      .dataTables_info {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin-top: 1rem;
        transition: color 0.3s ease;
      }
      
      .dataTables_paginate {
        margin-top: 1rem;
      }
      
      .dataTables_paginate .paginate_button {
        padding: 0.375rem 0.75rem;
        margin: 0 0.125rem;
        border: 1px solid var(--border-color);
        background-color: var(--card-bg); /* Changed to card-bg */
        color: var(--text-primary);
        border-radius: 6px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }
      
      .dataTables_paginate .paginate_button:hover {
        background-color: var(--light-bg); /* Changed to light-bg */
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
      
      .dataTables_paginate .paginate_button.current {
        background-color: var(--primary-color) !important;
        color: white !important;
        border-color: var(--primary-color) !important;
      }
      
      .dataTables_paginate .paginate_button.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
      
      /* Responsive table styling */
      @media (max-width: 768px) {
        .dataTables_wrapper .dataTables_length,
        .dataTables_wrapper .dataTables_filter {
          float: none;
          text-align: left;
          margin-bottom: 1rem;
        }
        
        .dataTables_wrapper .dataTables_info,
        .dataTables_wrapper .dataTables_paginate {
          float: none;
          text-align: center;
        }
      }
      
      /* Loading animation */
      .dataTables_processing {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        margin-left: -100px;
        margin-top: -26px;
        text-align: center;
        padding: 1rem;
        background-color: var(--card-bg); /* Changed to card-bg */
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        color: var(--text-primary);
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }
}

// Function to refresh specific DataTable
function refreshDataTable(tableId) {
  if ($.fn.DataTable.isDataTable(`#${tableId}`)) {
    $(`#${tableId}`).DataTable().ajax.reload(null, false);
  }
}

// Function to destroy and reinitialize DataTable
function reinitializeDataTable(tableId) {
  if ($.fn.DataTable.isDataTable(`#${tableId}`)) {
    $(`#${tableId}`).DataTable().destroy();
  }

  // Reinitialize based on table ID
  switch (tableId) {
    case "assetsTable":
      loadAssetsTable();
      break;
    case "borrowingTable":
      loadBorrowingTable();
      break;
    case "maintenanceTable":
      loadMaintenanceTable();
      break;
    case "usersTable":
      loadUsersTable();
      break;
    case "requestsTable":
      loadRequestsTable();
      break;
    case "recentAssetsTable":
      loadRecentAssets();
      break;
  }

  // Wait for table to be populated, then reinitialize DataTable
  setTimeout(() => {
    initDataTables();
  }, 100);
}

// Animasi untuk card stats
function animateStatsCards() {
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-fade-up");
  });
}

// Panggil fungsi animasi
setTimeout(animateStatsCards, 1000);

// Statistics Functions
function updateStatistics() {
  const totalAssets = assets.length;
  const borrowedAssets = assets.filter(
    (asset) => asset.status === "Dipinjam"
  ).length;
  const availableAssets = assets.filter(
    (asset) => asset.status === "Tersedia"
  ).length;
  const maintenanceAssets = assets.filter(
    (asset) => asset.status === "Maintenance"
  ).length;

  const totalAssetsElement = document.getElementById("totalAssets");
  const borrowedAssetsElement = document.getElementById("borrowedAssets");
  const availableAssetsElement = document.getElementById("availableAssets");
  const maintenanceAssetsElement = document.getElementById("maintenanceAssets");

  if (totalAssetsElement) totalAssetsElement.textContent = totalAssets;
  if (borrowedAssetsElement) borrowedAssetsElement.textContent = borrowedAssets;
  if (availableAssetsElement)
    availableAssetsElement.textContent = availableAssets;
  if (maintenanceAssetsElement)
    maintenanceAssetsElement.textContent = maintenanceAssets;
}

function loadRecentAssets() {
  const tableBody = document.getElementById("recentAssetsTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  const recentAssets = assets.slice(-5).reverse();

  recentAssets.forEach((asset) => {
    const statusClass =
      asset.status === "Tersedia"
        ? "available"
        : asset.status === "Dipinjam"
        ? "borrowed"
        : "maintenance";

    const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>${asset.name}</td>
                <td>${asset.typeName}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${
      asset.status
    }</span></td>
                <td>${formatDate(asset.dateAdded)}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

// Update the loadAssetsTable function to include search setup
function loadAssetsTable() {
  const tableBody = document.getElementById("assetsTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  assets.forEach((asset) => {
    const statusClass =
      asset.status === "Tersedia"
        ? "available"
        : asset.status === "Dipinjam"
        ? "borrowed"
        : "maintenance";

    const conditionClass =
      asset.condition === "Baik"
        ? "available"
        : asset.condition === "Rusak Ringan"
        ? "borrowed"
        : "maintenance";

    const canEdit =
      currentUserLevel === "Admin" || currentUserLevel === "Sarpras";

    const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <img src="${asset.image}" alt="${
      asset.name
    }" class="asset-image-preview" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;">
                        <span>${asset.name}</span>
                    </div>
                </td>
                <td>${asset.typeName}</td>
                <td>${asset.brand}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${
      asset.status
    }</span></td>
                <td><span class="status-badge ${conditionClass}">${
      asset.condition
    }</span></td>
                <td><span class="price-display">${formatCurrency(
                  asset.price
                )}</span></td>
                <td>
                    ${
                      canEdit
                        ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editAsset('${asset.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteAsset('${asset.id}')">Hapus</button>
                            <button class="btn btn-primary" onclick="viewAssetDetail('${asset.id}')">Detail</button>
                        </div>
                    `
                        : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });

  // Setup search functionality after loading the table
  setupSearchFunctionality();
}

function openAssetModal(assetId = null) {
  if (currentUserLevel !== "Admin" && currentUserLevel !== "Sarpras") {
    showToast("Anda tidak memiliki izin untuk menambah/edit aset", "error");
    return;
  }

  const modal = document.getElementById("assetModal");
  const title = document.querySelector("#assetModal .modal-title");

  if (!modal) return;

  editingAssetId = assetId;

  if (assetId) {
    if (title) title.textContent = "Edit Aset";
    const asset = assets.find((a) => a.id === assetId);
    if (asset) {
      const nameField = document.getElementById("assetName");
      const typeField = document.getElementById("assetType");
      const brandField = document.getElementById("assetBrand");
      const serialField = document.getElementById("assetSerial");
      const priceField = document.getElementById("assetPrice");
      const purchaseDateField = document.getElementById("assetPurchaseDate");
      const locationField = document.getElementById("assetLocation");
      const conditionField = document.getElementById("assetCondition");

      if (nameField) nameField.value = asset.name;
      if (typeField) typeField.value = asset.type;
      if (brandField) brandField.value = asset.brand;
      if (serialField) serialField.value = asset.serial;
      if (priceField) priceField.value = asset.price;
      if (purchaseDateField) purchaseDateField.value = asset.purchaseDate;
      if (locationField) locationField.value = asset.location;
      if (conditionField) conditionField.value = asset.condition;

      // Set image preview
      const preview = document.getElementById("assetImagePreview");
      if (preview) {
        preview.innerHTML = `<img src="${asset.image}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 8px;">`;
      }
    }
  } else {
    if (title) title.textContent = "Tambah Aset Baru";
    const assetForm = document.getElementById("assetForm");
    if (assetForm) assetForm.reset();

    const preview = document.getElementById("assetImagePreview");
    if (preview) preview.innerHTML = "";

    // Set default purchase date to today
    const purchaseDateField = document.getElementById("assetPurchaseDate");
    if (purchaseDateField) {
      purchaseDateField.value = new Date().toISOString().split("T")[0];
    }
  }

  modal.classList.add("active");
}

function viewAssetDetail(id) {
  const asset = assets.find((a) => a.id === id);
  if (!asset) return;

  const modal = document.getElementById("assetDetailModal");
  const content = document.getElementById("assetDetailContent");

  if (!modal || !content) return;

  content.innerHTML = `
        <div class="asset-detail">
            <div class="detail-row">
                <div class="detail-image">
                    <img src="${asset.image}" alt="${
    asset.name
  }" style="max-width: 100%; border-radius: 8px;">
                </div>
                <div class="detail-info">
                    <h4>${asset.name}</h4>
                    <p><strong>ID:</strong> ${asset.id}</p>
                    <p><strong>Jenis:</strong> ${asset.typeName}</p>
                    <p><strong>Merek:</strong> ${asset.brand}</p>
                    <p><strong>Nomor Seri:</strong> ${asset.serial}</p>
                    <p><strong>Barcode:</strong> ${asset.barcode}</p>
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-col">
                    <p><strong>Lokasi:</strong> ${asset.location}</p>
                    <p><strong>Status:</strong> <span class="status-badge ${
                      asset.status === "Tersedia"
                        ? "available"
                        : asset.status === "Dipinjam"
                        ? "borrowed"
                        : "maintenance"
                    }">${asset.status}</span></p>
                </div>
                <div class="detail-col">
                    <p><strong>Kondisi:</strong> <span class="status-badge ${
                      asset.condition === "Baik"
                        ? "available"
                        : asset.condition === "Rusak Ringan"
                        ? "borrowed"
                        : "maintenance"
                    }">${asset.condition}</span></p>
                    <p><strong>Harga:</strong> ${formatCurrency(
                      asset.price
                    )}</p>
                </div>
            </div>
            <div class="detail-row">
                <p><strong>Tanggal Pembelian:</strong> ${formatDate(
                  asset.purchaseDate
                )}</p>
                <p><strong>Tanggal Masuk:</strong> ${formatDate(
                  asset.dateAdded
                )}</p>
            </div>
            <div class="btn-group" style="margin-top: 1rem;">
                <button class="btn btn-primary" onclick="closeModal('assetDetailModal')">Tutup</button>
                <button class="btn btn-secondary" onclick="openBarcodeModal('${
                  asset.barcode
                }')">Lihat Barcode</button>
            </div>
        </div>
    `;

  modal.classList.add("active");
}

function openBarcodeModal(barcode) {
  const modal = document.getElementById("barcodeModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function editAsset(id) {
  openAssetModal(id);
}

function deleteAsset(id) {
  if (currentUserLevel !== "Admin" && currentUserLevel !== "Sarpras") {
    showToast("Anda tidak memiliki izin untuk menghapus aset", "error");
    return;
  }

  if (confirm("Apakah Anda yakin ingin menghapus aset ini?")) {
    assets = assets.filter((asset) => asset.id !== id);
    loadAssetsTable();
    updateStatistics();
    loadRecentAssets();
    updateAssetChart();
    showToast("Aset berhasil dihapus!");
  }
}

function saveAsset(event) {
  event.preventDefault();

  if (!validateForm("assetForm")) return;

  const saveBtn = document.getElementById("saveAssetBtn");
  if (saveBtn) {
    saveBtn.classList.add("loading");
    saveBtn.disabled = true;
  }

  showLoading();

  // Simulate async operation
  setTimeout(() => {
    const typeMapping = {
      ELK: "Elektronik",
      FUR: "Furniture",
      KDR: "Kendaraan",
      ATK: "Alat Tulis",
      LAN: "Lainnya",
    };

    const assetTypeField = document.getElementById("assetType");
    const assetNameField = document.getElementById("assetName");
    const assetImageInput = document.getElementById("assetImage");

    if (!assetTypeField || !assetNameField) {
      hideLoading();
      if (saveBtn) {
        saveBtn.classList.remove("loading");
        saveBtn.disabled = false;
      }
      return;
    }

    const assetType = assetTypeField.value;
    let assetImageUrl = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${encodeURIComponent(
      assetNameField.value
    )}`;

    // Handle image upload
    if (assetImageInput && assetImageInput.files.length > 0) {
      const file = assetImageInput.files[0];
      assetImageUrl = URL.createObjectURL(file);
    } else if (editingAssetId) {
      const existingAsset = assets.find((a) => a.id === editingAssetId);
      if (existingAsset) {
        assetImageUrl = existingAsset.image;
      }
    }

    const assetData = {
      name: assetNameField.value,
      type: assetType,
      typeName: typeMapping[assetType],
      brand: document.getElementById("assetBrand")?.value || "",
      serial: document.getElementById("assetSerial")?.value || "",
      price: parseInt(document.getElementById("assetPrice")?.value || 0),
      purchaseDate: document.getElementById("assetPurchaseDate")?.value || "",
      location: document.getElementById("assetLocation")?.value || "",
      condition: document.getElementById("assetCondition")?.value || "",
      status: "Tersedia",
      image: assetImageUrl,
      barcode:
        (document.getElementById("assetSerial")?.value || "") +
        Math.random().toString(36).substr(2, 3).toUpperCase(),
    };

    if (editingAssetId) {
      // Edit existing asset
      const assetIndex = assets.findIndex((a) => a.id === editingAssetId);
      if (assetIndex !== -1) {
        assets[assetIndex] = { ...assets[assetIndex], ...assetData };
        showToast("Aset berhasil diupdate!");
      }
    } else {
      // Add new asset
      const existingAsset = assets.find((a) => a.serial === assetData.serial);
      if (existingAsset) {
        showToast("Nomor seri sudah ada!", "error");
        hideLoading();
        if (saveBtn) {
          saveBtn.classList.remove("loading");
          saveBtn.disabled = false;
        }
        return;
      }

      assetData.id = generateAssetId(assetType);
      assetData.dateAdded = new Date().toISOString().split("T")[0];
      assets.push(assetData);
      showToast("Aset berhasil ditambahkan!");
    }

    closeModal("assetModal");
    loadAssetsTable();
    updateStatistics();
    loadRecentAssets();
    updateAssetChart();

    if (saveBtn) {
      saveBtn.classList.remove("loading");
      saveBtn.disabled = false;
    }
    hideLoading();
  }, 1500);
}

// Borrowing Management Functions
function loadBorrowingTable() {
  const tableBody = document.getElementById("borrowingTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  borrowings.forEach((borrow) => {
    const statusClass = borrow.status === "Aktif" ? "borrowed" : "available";
    const canManage =
      currentUserLevel === "Admin" || currentUserLevel === "Sarpras";

    const row = `
            <tr>
                <td><strong>${borrow.id}</strong></td>
                <td>${borrow.borrower} <small>(${
      borrow.borrowerRole
    })</small></td>
                <td>${borrow.asset}</td>
                <td>${formatDate(borrow.borrowDate)}</td>
                <td>${formatDate(borrow.returnDate)}</td>
                <td><span class="status-badge ${statusClass}">${
      borrow.status
    }</span></td>
                <td>
                    ${
                      borrow.status === "Aktif" && canManage
                        ? `<button class="btn btn-success" onclick="returnAsset('${borrow.id}')">Kembalikan</button>`
                        : `<span style="color: var(--text-secondary); font-size: 0.75rem;">${borrow.status}</span>`
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function loadAvailableAssets() {
  const select = document.getElementById("borrowAsset");
  if (!select) return;

  select.innerHTML = '<option value="">Pilih Aset</option>';

  const availableAssets = assets.filter((asset) => asset.status === "Tersedia");
  availableAssets.forEach((asset) => {
    select.innerHTML += `<option value="${asset.name}" data-id="${asset.id}">${asset.name} (${asset.typeName})</option>`;
  });
}

function openBorrowModal() {
  if (currentUserLevel !== "Admin" && currentUserLevel !== "Sarpras") {
    showToast("Anda tidak memiliki izin untuk mencatat peminjaman", "error");
    return;
  }

  const modal = document.getElementById("borrowModal");
  if (modal) {
    modal.classList.add("active");
  }

  loadAvailableAssets();

  // Set default dates
  const today = new Date().toISOString().split("T")[0];
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextWeekStr = nextWeek.toISOString().split("T")[0];

  const borrowDateField = document.getElementById("borrowDate");
  const returnDateField = document.getElementById("returnDate");

  if (borrowDateField) borrowDateField.value = today;
  if (returnDateField) returnDateField.value = nextWeekStr;
}

function saveBorrow(event) {
  event.preventDefault();

  if (!validateForm("borrowForm")) return;

  const borrowAssetField = document.getElementById("borrowAsset");
  const borrowData = {
    id: generateBorrowId(),
    borrower: document.getElementById("borrowerName")?.value || "",
    borrowerRole: document.getElementById("borrowerRole")?.value || "",
    asset: borrowAssetField?.value || "",
    assetId: borrowAssetField?.selectedOptions[0]?.dataset?.id || "",
    borrowDate: document.getElementById("borrowDate")?.value || "",
    returnDate: document.getElementById("returnDate")?.value || "",
    actualReturnDate: null,
    purpose: document.getElementById("borrowPurpose")?.value || "",
    status: "Aktif",
  };

  borrowings.push(borrowData);

  // Update asset status
  const asset = assets.find((a) => a.name === borrowData.asset);
  if (asset) {
    asset.status = "Dipinjam";
  }

  closeModal("borrowModal");
  loadBorrowingTable();
  updateStatistics();
  loadRecentAssets();

  showToast("Peminjaman berhasil dicatat!");
}

function returnAsset(borrowId) {
  if (confirm("Konfirmasi pengembalian aset?")) {
    const borrow = borrowings.find((b) => b.id === borrowId);
    if (borrow) {
      borrow.status = "Selesai";
      borrow.actualReturnDate = new Date().toISOString().split("T")[0];

      // Update asset status
      const asset = assets.find((a) => a.name === borrow.asset);
      if (asset) {
        asset.status = "Tersedia";
      }

      loadBorrowingTable();
      updateStatistics();
      loadRecentAssets();
      updateAssetChart();

      showToast("Aset berhasil dikembalikan!");
    }
  }
}

// Maintenance Management Functions
function loadMaintenanceTable() {
  const tableBody = document.getElementById("maintenanceTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  maintenanceRecords.forEach((maintenance) => {
    const statusClass =
      maintenance.status === "Selesai" ? "available" : "maintenance";
    const canManage =
      currentUserLevel === "Admin" || currentUserLevel === "Sarpras";

    const row = `
            <tr>
                <td><strong>${maintenance.id}</strong></td>
                <td>${maintenance.assetName}</td>
                <td>${maintenance.type}</td>
                <td>${formatDate(maintenance.date)}</td>
                <td><span class="price-display">${formatCurrency(
                  maintenance.cost
                )}</span></td>
                <td><span class="status-badge ${statusClass}">${
      maintenance.status
    }</span></td>
                <td>
                    ${
                      canManage
                        ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="viewMaintenanceDetail('${maintenance.id}')">Detail</button>
                        </div>
                    `
                        : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function loadAssetsForMaintenance() {
  const select = document.getElementById("maintenanceAsset");
  if (!select) return;

  select.innerHTML = '<option value="">Pilih Aset</option>';

  assets.forEach((asset) => {
    select.innerHTML += `<option value="${asset.name}" data-id="${asset.id}">${asset.name} (${asset.typeName})</option>`;
  });
}

function openMaintenanceModal() {
  if (currentUserLevel !== "Admin" && currentUserLevel !== "Sarpras") {
    showToast("Anda tidak memiliki izin untuk mencatat pemeliharaan", "error");
    return;
  }

  const modal = document.getElementById("maintenanceModal");
  if (modal) {
    modal.classList.add("active");
  }

  loadAssetsForMaintenance();

  // Set default date to today
  const maintenanceDateField = document.getElementById("maintenanceDate");
  if (maintenanceDateField) {
    maintenanceDateField.value = new Date().toISOString().split("T")[0];
  }
}

function saveMaintenance(event) {
  event.preventDefault();

  if (!validateForm("maintenanceForm")) return;

  const maintenanceAssetField = document.getElementById("maintenanceAsset");
  const maintenanceData = {
    id: generateMaintenanceId(),
    assetName: maintenanceAssetField?.value || "",
    assetId: maintenanceAssetField?.selectedOptions[0]?.dataset?.id || "",
    type: document.getElementById("maintenanceType")?.value || "",
    date: document.getElementById("maintenanceDate")?.value || "",
    cost: parseInt(document.getElementById("maintenanceCost")?.value || 0),
    description: document.getElementById("maintenanceDescription")?.value || "",
    status: "Selesai",
    technician: currentUser,
  };

  maintenanceRecords.push(maintenanceData);

  // Update asset status if needed
  const asset = assets.find((a) => a.name === maintenanceData.assetName);
  if (asset && maintenanceData.type === "Corrective") {
    asset.condition = "Baik";
    asset.status = "Tersedia";
  }

  closeModal("maintenanceModal");
  loadMaintenanceTable();
  updateStatistics();
  loadRecentAssets();

  showToast("Catatan pemeliharaan berhasil disimpan!");
}

function viewMaintenanceDetail(id) {
  const maintenance = maintenanceRecords.find((m) => m.id === id);
  if (maintenance) {
    alert(`Detail Pemeliharaan:
        
ID: ${maintenance.id}
Aset: ${maintenance.assetName}
Jenis: ${maintenance.type}
Tanggal: ${formatDate(maintenance.date)}
Biaya: ${formatCurrency(maintenance.cost)}
Teknisi: ${maintenance.technician}
Deskripsi: ${maintenance.description}`);
  }
}

// User Management Functions
function loadUsersTable() {
  const tableBody = document.getElementById("usersTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  users.forEach((user) => {
    const canManage = currentUserLevel === "Admin";

    const row = `
            <tr>
                <td><strong>${user.id}</strong></td>
                <td>
                    <img src="${user.avatar}" alt="${
      user.name
    }" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                </td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><span class="status-badge available">${
                  user.level
                }</span></td>
                <td><span class="status-badge available">${
                  user.status
                }</span></td>
                <td>
                    ${
                      canManage
                        ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editUser(${user.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteUser(${user.id})">Hapus</button>
                        </div>
                    `
                        : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function openUserModal() {
  if (currentUserLevel !== "Admin") {
    showToast("Anda tidak memiliki izin untuk menambah pengguna", "error");
    return;
  }
  const modal = document.getElementById("userModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function editUser(id) {
  const user = users.find((u) => u.id === id);
  if (!user) return;

  const modal = document.getElementById("userModal");
  const title = document.querySelector("#userModal .modal-title");

  if (title) title.textContent = "Edit Pengguna";

  const nameField = document.getElementById("userName");
  const usernameField = document.getElementById("userUsername");
  const levelField = document.getElementById("userLevel");

  if (nameField) nameField.value = user.name;
  if (usernameField) usernameField.value = user.username;
  if (levelField) levelField.value = user.level;

  // Set image preview
  const preview = document.getElementById("userAvatarPreview");
  if (preview) {
    preview.innerHTML = `<img src="${user.avatar}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 8px;">`;
  }

  if (modal) {
    modal.classList.add("active");
  }
}

function deleteUser(id) {
  if (currentUserLevel !== "Admin") {
    showToast("Anda tidak memiliki izin untuk menghapus pengguna", "error");
    return;
  }

  if (id === 1) {
    showToast("Tidak dapat menghapus user admin utama", "error");
    return;
  }

  if (confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
    users = users.filter((user) => user.id !== id);
    loadUsersTable();
    showToast("Pengguna berhasil dihapus!");
  }
}

function saveUser(event) {
  event.preventDefault();

  if (!validateForm("userForm")) return;

  const userAvatarInput = document.getElementById("userAvatar");
  const userNameField = document.getElementById("userName");
  const usernameField = document.getElementById("userUsername");

  let userAvatarUrl = `https://via.placeholder.com/100x100/64748b/ffffff?text=${
    userNameField?.value?.charAt(0)?.toUpperCase() || "U"
  }`;

  // Handle image upload
  if (userAvatarInput && userAvatarInput.files.length > 0) {
    const file = userAvatarInput.files[0];
    userAvatarUrl = URL.createObjectURL(file);
  }

  const userData = {
    id: nextUserCounter++,
    name: userNameField?.value || "",
    username: usernameField?.value || "",
    level: document.getElementById("userLevel")?.value || "",
    status: "Aktif",
    avatar: userAvatarUrl,
    email: `${usernameField?.value || ""}@sttc.ac.id`,
  };

  // Check if username already exists
  const existingUser = users.find((u) => u.username === userData.username);
  if (existingUser) {
    showToast("Username sudah ada!", "error");
    return;
  }

  users.push(userData);

  closeModal("userModal");
  loadUsersTable();

  showToast("Pengguna berhasil ditambahkan!");
}

// Request Management Functions
function loadRequestsTable() {
  const tableBody = document.getElementById("requestsTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  requests.forEach((request) => {
    const statusClass =
      request.status === "Pending"
        ? "pending"
        : request.status === "Disetujui"
        ? "approved"
        : "rejected";

    const canManage =
      (currentUserLevel === "Admin" || currentUserLevel === "Keuangan") &&
      request.status === "Pending";

    const row = `
            <tr>
                <td><strong>${request.id}</strong></td>
                <td>${request.requester}</td>
                <td>${request.asset}</td>
                <td><span class="status-badge available">${
                  request.quantity
                }</span></td>
                <td>${formatDate(request.requestDate)}</td>
                <td><span class="status-badge ${statusClass}">${
      request.status
    }</span></td>
                <td>
                    ${
                      canManage
                        ? `
                        <div class="action-buttons">
                            <button class="btn btn-success" onclick="approveRequest('${request.id}')">Setujui</button>
                            <button class="btn btn-danger" onclick="rejectRequest('${request.id}')">Tolak</button>
                        </div>
                    `
                        : `<span style="color: var(--text-secondary); font-size: 0.75rem;">${request.status}</span>`
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

function openRequestModal() {
  const canCreate = ["Admin", "Kaprodi", "Sarpras"].includes(currentUserLevel);
  if (!canCreate) {
    showToast("Anda tidak memiliki izin untuk mengajukan aset", "error");
    return;
  }
  const modal = document.getElementById("requestModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function saveRequest(event) {
  event.preventDefault();

  if (!validateForm("requestForm")) return;

  const requestData = {
    id: generateRequestId(),
    requester: currentUser,
    asset: document.getElementById("requestAsset")?.value || "",
    type: document.getElementById("requestType")?.value || "",
    quantity: parseInt(document.getElementById("requestQuantity")?.value || 1),
    requestDate: new Date().toISOString().split("T")[0],
    status: "Pending",
    reason: document.getElementById("requestReason")?.value || "",
  };

  requests.push(requestData);

  closeModal("requestModal");
  loadRequestsTable();

  showToast("Pengajuan berhasil dikirim!");
}

function approveRequest(id) {
  const request = requests.find((r) => r.id === id);
  if (request) {
    request.status = "Disetujui";
    loadRequestsTable();
    showToast("Pengajuan disetujui!");
  }
}

function rejectRequest(id) {
  const request = requests.find((r) => r.id === id);
  if (request) {
    request.status = "Ditolak";
    loadRequestsTable();
    showToast("Pengajuan ditolak!");
  }
}

// Modal Functions
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }

  if (modalId === "assetModal") {
    editingAssetId = null;
    const assetForm = document.getElementById("assetForm");
    if (assetForm) assetForm.reset();
  }
}

// Report Functions
function generateReport(type) {
  currentReportType = type;
  const reportPreview = document.getElementById("reportPreview");
  if (!reportPreview) return;

  reportPreview.innerHTML = "";

  const reportContainer = document.createElement("div");
  reportContainer.className = "report-container";

  // Header laporan
  const header = document.createElement("div");
  header.className = "report-header";
  header.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <img src="/assets/logo-stti.png" alt="Logo STTI" style="width: 80px; height: 80px; margin-right: 20px;">
            <div>
                <h1 style="font-size: 15pt; font-weight: bold; margin: 0; line-height: 1.2;">SEKOLAH TINGGI TEKNOLOGI INDONESIA (STT INDONESIA)</h1>
                <p style="font-size: 10pt; margin: 5px 0; line-height: 1.2;">Jalan Raya Cirebon Kuningan Desa Kondangsari RT/RW 04/12 Kec. Beber Kab. Cirebon - Jawa Barat</p>
                <p style="font-size: 10pt; margin: 0; line-height: 1.2;">Telp: 081392637640 | E-mail: akademik@stti.ac.id</p>
            </div>
        </div>
        <hr style="border-top: 2px solid #000; margin: 10px 0;">
        <h2 style="text-align: center; font-size: 14pt; font-weight: bold; margin: 10px 0;">${getReportTitle()}</h2>
        <p style="text-align: center; font-size: 11pt; margin-bottom: 15px;">Tanggal: ${formatDate(
          new Date().toISOString().split("T")[0]
        )}</p>
    `;
  reportContainer.appendChild(header);

  // Tabel laporan
  const table = document.createElement("table");
  table.className = "report-table";
  table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        font-size: 10pt;
    `;

  switch (type) {
    case "assets":
      createAssetReport(table);
      break;
    case "borrowing":
      createBorrowingReport(table);
      break;
    case "maintenance":
      createMaintenanceReport(table);
      break;
    case "financial":
      createFinancialReport(table);
      break;
  }

  reportContainer.appendChild(table);

  // Footer laporan
  const footer = document.createElement("div");
  footer.className = "report-footer";
  footer.innerHTML = `
        <div style="text-align: right; margin-top: 50px;">
            <p style="margin-bottom: 50px;">Cirebon, ${formatDate(
              new Date().toISOString().split("T")[0]
            )}</p>
            <div style="border-top: 1px solid #000; width: 200px; margin-left: auto; margin-bottom: 10px;"></div>
            <p style="font-weight: bold; margin: 0;">${currentUser}</p>
            <p style="margin: 0;">${currentUserLevel}</p>
        </div>
    `;
  reportContainer.appendChild(footer);

  // Tombol aksi
  const actionButtons = document.createElement("div");
  actionButtons.style.cssText = `
        margin-top: 20px;
        display: flex;
        gap: 10px;
        justify-content: center;
    `;

  const printBtn = document.createElement("button");
  printBtn.className = "btn btn-primary";
  printBtn.textContent = "Cetak Laporan";
  printBtn.onclick = printReport;

  const pdfBtn = document.createElement("button");
  pdfBtn.className = "btn btn-secondary";
  pdfBtn.textContent = "Export PDF";
  pdfBtn.onclick = exportToPDF;

  const excelBtn = document.createElement("button");
  excelBtn.className = "btn btn-success";
  excelBtn.textContent = "Export Excel";
  excelBtn.onclick = exportToExcel;

  actionButtons.appendChild(printBtn);
  actionButtons.appendChild(pdfBtn);
  actionButtons.appendChild(excelBtn);
  reportContainer.appendChild(actionButtons);

  reportPreview.appendChild(reportContainer);
}

// Fixed PDF Export Function with Consistent Header
function exportToPDF() {
  if (!currentReportType) {
    showToast("Pilih jenis laporan terlebih dahulu", "error");
    return;
  }

  showToast("Memuat library PDF...", "info");

  // Load jsPDF dynamically
  Promise.all([
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
    ),
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js"
    ),
  ])
    .then(() => {
      try {
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // Set margins
        const marginLeft = 15;
        const marginRight = 15;
        const marginTop = 20;
        const pageWidth = doc.internal.pageSize.getWidth();

        // Header Section - Logo and Institution Info (same as generateReport layout)
        try {
          const logo = "assets/logo-stti.png";
          // Convert 80px to mm (approximately 21mm)
          doc.addImage(logo, "PNG", marginLeft, marginTop, 21, 21);
        } catch (logoError) {
          console.warn("Logo tidak dapat dimuat:", logoError);
        }

        // Institution name and details (positioned next to logo, same as generateReport)
        const textStartX = marginLeft + 26; // Position text next to logo (21mm + 5mm margin)

        // Institution title - same as generateReport (16pt = ~5.6mm)
        doc.setFont("times", "bold");
        doc.setFontSize(14); // Adjusted for PDF
        doc.text(
          "SEKOLAH TINGGI TEKNOLOGI INDONESIA (STT INDONESIA)",
          textStartX,
          marginTop + 8
        );

        // Address and contact - same as generateReport (10pt = ~3.5mm)
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.text(
          "Jalan Raya Cirebon Kuningan Desa Kondangsari RT/RW 04/12 Kec. Beber Kab. Cirebon - Jawa Barat",
          textStartX,
          marginTop + 14
        );
        doc.text(
          "Telp: 081392637640 | E-mail: akademik@stti.ac.id",
          textStartX,
          marginTop + 18
        );

        // Horizontal line separator (same as generateReport - 2px thick)
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.8);
        doc.line(
          marginLeft,
          marginTop + 28,
          pageWidth - marginRight,
          marginTop + 28
        );

        // Report title (centered, same as generateReport - 14pt)
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text(getReportTitle(), pageWidth / 2, marginTop + 38, {
          align: "center",
        });

        // Report date (centered, same as generateReport - 11pt)
        doc.setFont("times", "normal");
        doc.setFontSize(11);
        doc.text(
          `Tanggal: ${formatDate(new Date().toISOString().split("T")[0])}`,
          pageWidth / 2,
          marginTop + 45,
          { align: "center" }
        );

        // Create table data based on report type
        let headers = [];
        let data = [];

        switch (currentReportType) {
          case "assets":
            headers = [
              "No",
              "ID Aset",
              "Nama Aset",
              "Jenis",
              "Lokasi",
              "Kondisi",
              "Status",
              "Harga",
            ];
            data = assets.map((asset, index) => [
              index + 1,
              asset.id,
              asset.name,
              asset.typeName,
              asset.location,
              asset.condition,
              asset.status,
              formatCurrency(asset.price),
            ]);
            break;
          case "borrowing":
            headers = [
              "No",
              "ID Peminjaman",
              "Peminjam",
              "Aset",
              "Tanggal Pinjam",
              "Tanggal Kembali",
              "Status",
            ];
            data = borrowings.map((borrow, index) => [
              index + 1,
              borrow.id,
              borrow.borrower,
              borrow.asset,
              formatDate(borrow.borrowDate),
              borrow.actualReturnDate
                ? formatDate(borrow.actualReturnDate)
                : formatDate(borrow.returnDate),
              borrow.status,
            ]);
            break;
          case "maintenance":
            headers = [
              "No",
              "ID Maintenance",
              "Aset",
              "Jenis Pemeliharaan",
              "Tanggal",
              "Biaya",
              "Status",
            ];
            data = maintenanceRecords.map((maintenance, index) => [
              index + 1,
              maintenance.id,
              maintenance.assetName,
              maintenance.type,
              formatDate(maintenance.date),
              formatCurrency(maintenance.cost),
              maintenance.status,
            ]);
            break;
          case "financial":
            headers = ["No", "Keterangan", "Jumlah", "Total"];
            const totalValue = assets.reduce(
              (sum, asset) => sum + asset.price,
              0
            );
            const maintenanceCost = maintenanceRecords.reduce(
              (sum, m) => sum + m.cost,
              0
            );
            const avgAssetValue = totalValue / (assets.length || 1);

            data = [
              ["1", "Total Aset", assets.length, formatCurrency(totalValue)],
              [
                "2",
                "Total Biaya Pemeliharaan",
                maintenanceRecords.length,
                formatCurrency(maintenanceCost),
              ],
              ["3", "Rata-rata Nilai Aset", "-", formatCurrency(avgAssetValue)],
            ];
            break;
        }

        // Table styling (same font size as generateReport - 10pt)
        const tableConfig = {
          startY: marginTop + 52,
          headStyles: {
            fillColor: [242, 242, 242],
            textColor: 0,
            fontStyle: "bold",
            fontSize: 9,
            font: "helvetica",
          },
          bodyStyles: {
            textColor: 0,
            fontSize: 8.5, // Same as generateReport 10pt converted to PDF
            font: "times",
          },
          margin: { left: marginLeft, right: marginRight },
          styles: {
            halign: "left",
            valign: "middle",
            fontSize: 8.5,
          },
        };

        // Generate table
        doc.autoTable({
          head: [headers],
          body: data,
          ...tableConfig,
        });

        // Footer Section - Same as generateReport
        const finalY = doc.lastAutoTable.finalY + 30;
        if (finalY < doc.internal.pageSize.getHeight() - 40) {
          // Date and location (right aligned, same as generateReport)
          doc.setFont("times", "normal");
          doc.setFontSize(11);
          const signatureX = pageWidth - marginRight - 60;
          doc.text(
            `Cirebon, ${formatDate(new Date().toISOString().split("T")[0])}`,
            signatureX,
            finalY
          );

          // Signature line (same width as generateReport - 200px â‰ˆ 50mm)
          doc.setDrawColor(0, 0, 0);
          doc.setLineWidth(0.4);
          const lineY = finalY + 23;
          doc.line(signatureX, lineY, signatureX + 50, lineY);

          // Signature name and title (same as generateReport)
          doc.setFont("times", "bold");
          doc.text(currentUser, signatureX + 25, lineY + 7, {
            align: "center",
          });
          doc.setFont("times", "normal");
          doc.text(currentUserLevel, signatureX + 25, lineY + 12, {
            align: "center",
          });
        }

        // Save the PDF
        doc.save(`laporan-${currentReportType}.pdf`);
        showToast("Laporan berhasil diunduh dalam format PDF!");
      } catch (error) {
        console.error("Error generating PDF:", error);
        showToast("Gagal membuat PDF. Silakan coba lagi.", "error");
      }
    })
    .catch((error) => {
      console.error("Error loading PDF libraries:", error);
      showToast(
        "Gagal memuat library PDF. Periksa koneksi internet Anda.",
        "error"
      );
    });
}

// Fixed Excel Export Function
function exportToExcel() {
  if (!currentReportType) {
    showToast("Pilih jenis laporan terlebih dahulu", "error");
    return;
  }

  showToast("Memuat library Excel...", "info");

  // Load XLSX dynamically
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"
  )
    .then(() => {
      try {
        // Create workbook
        const wb = XLSX.utils.book_new();

        // Create worksheet data
        let reportData = [];

        // Add header information
        reportData.push(["SEKOLAH TINGGI TEKNOLOGI INDONESIA (STT INDONESIA)"]);
        reportData.push([
          "Jalan Raya Cirebon Kuningan Desa Kondangsari RT/RW 04/12",
        ]);
        reportData.push(["Kec. Beber Kab. Cirebon - Jawa Barat"]);
        reportData.push(["Telp: 081392637640 | E-mail: akademik@stti.ac.id"]);
        reportData.push([]);
        reportData.push([getReportTitle()]);
        reportData.push([
          `Tanggal: ${formatDate(new Date().toISOString().split("T")[0])}`,
        ]);
        reportData.push([]);

        // Add table headers and data based on report type
        let headers = [];
        let data = [];

        switch (currentReportType) {
          case "assets":
            headers = [
              "No",
              "ID Aset",
              "Nama Aset",
              "Jenis",
              "Lokasi",
              "Kondisi",
              "Status",
              "Harga",
            ];
            data = assets.map((asset, index) => [
              index + 1,
              asset.id,
              asset.name,
              asset.typeName,
              asset.location,
              asset.condition,
              asset.status,
              formatCurrency(asset.price),
            ]);
            break;
          case "borrowing":
            headers = [
              "No",
              "ID Peminjaman",
              "Peminjam",
              "Aset",
              "Tanggal Pinjam",
              "Tanggal Kembali",
              "Status",
            ];
            data = borrowings.map((borrow, index) => [
              index + 1,
              borrow.id,
              borrow.borrower,
              borrow.asset,
              formatDate(borrow.borrowDate),
              borrow.actualReturnDate
                ? formatDate(borrow.actualReturnDate)
                : formatDate(borrow.returnDate),
              borrow.status,
            ]);
            break;
          case "maintenance":
            headers = [
              "No",
              "ID Maintenance",
              "Aset",
              "Jenis Pemeliharaan",
              "Tanggal",
              "Biaya",
              "Status",
            ];
            data = maintenanceRecords.map((maintenance, index) => [
              index + 1,
              maintenance.id,
              maintenance.assetName,
              maintenance.type,
              formatDate(maintenance.date),
              formatCurrency(maintenance.cost),
              maintenance.status,
            ]);
            break;
          case "financial":
            headers = ["No", "Keterangan", "Jumlah", "Total"];
            const totalValue = assets.reduce(
              (sum, asset) => sum + asset.price,
              0
            );
            const maintenanceCost = maintenanceRecords.reduce(
              (sum, m) => sum + m.cost,
              0
            );
            const avgAssetValue = totalValue / (assets.length || 1);

            data = [
              ["1", "Total Aset", assets.length, formatCurrency(totalValue)],
              [
                "2",
                "Total Biaya Pemeliharaan",
                maintenanceRecords.length,
                formatCurrency(maintenanceCost),
              ],
              ["3", "Rata-rata Nilai Aset", "-", formatCurrency(avgAssetValue)],
            ];
            break;
        }

        // Add headers and data to report
        reportData.push(headers);
        reportData = reportData.concat(data);

        // Add signature section
        reportData.push([]);
        reportData.push([]);
        reportData.push([
          `Cirebon, ${formatDate(new Date().toISOString().split("T")[0])}`,
        ]);
        reportData.push([]);
        reportData.push([currentUser]);
        reportData.push([currentUserLevel]);

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet(reportData);

        // Set column widths
        const range = XLSX.utils.decode_range(ws["!ref"]);
        ws["!cols"] = [];
        for (let C = range.s.c; C <= range.e.c; ++C) {
          ws["!cols"].push({ wch: 15 }); // Default width
        }

        // Adjust specific column widths based on report type
        if (currentReportType === "assets") {
          if (ws["!cols"][1]) ws["!cols"][1] = { wch: 20 }; // ID Aset
          if (ws["!cols"][2]) ws["!cols"][2] = { wch: 25 }; // Nama Aset
          if (ws["!cols"][7]) ws["!cols"][7] = { wch: 20 }; // Harga
        } else if (currentReportType === "borrowing") {
          if (ws["!cols"][1]) ws["!cols"][1] = { wch: 15 }; // ID Peminjaman
          if (ws["!cols"][2]) ws["!cols"][2] = { wch: 25 }; // Peminjam
          if (ws["!cols"][3]) ws["!cols"][3] = { wch: 25 }; // Aset
          if (ws["!cols"][4]) ws["!cols"][4] = { wch: 15 }; // Tanggal Pinjam
          if (ws["!cols"][5]) ws["!cols"][5] = { wch: 15 }; // Tanggal Kembali
        }

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, "Laporan");

        // Save the Excel file
        XLSX.writeFile(wb, `laporan-${currentReportType}.xlsx`);
        showToast("Laporan berhasil diunduh dalam format Excel!");
      } catch (error) {
        console.error("Error generating Excel:", error);
        showToast("Gagal membuat Excel. Silakan coba lagi.", "error");
      }
    })
    .catch((error) => {
      console.error("Error loading Excel library:", error);
      showToast(
        "Gagal memuat library Excel. Periksa koneksi internet Anda.",
        "error"
      );
    });
}

function printReport() {
  if (!currentReportType) return;

  const reportPreview = document.getElementById("reportPreview");
  if (!reportPreview) return;

  // Clone the report content
  const reportContent = reportPreview.querySelector(".report-container");
  if (!reportContent) return;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
        <html>
            <head>
                <title>Laporan Inventaris - ${getReportTitle()}</title>
                <style>
                    body {
                        font-family: "Times New Roman", Times, serif;
                        margin: 0;
                        padding: 20px;
                        color: #000;
                    }
                    
                    .report-header h1 {
                        font-size: 16pt;
                        font-weight: bold;
                        margin: 0;
                        line-height: 1.2;
                    }
                    
                    .report-header p {
                        font-size: 10pt;
                        margin: 5px 0;
                        line-height: 1.2;
                    }
                    
                    .report-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 15px;
                        font-size: 10pt;
                    }
                    
                    .report-table th {
                        background-color: #f2f2f2;
                        border: 1px solid #000;
                        padding: 5px;
                        text-align: left;
                        font-weight: bold;
                    }
                    
                    .report-table td {
                        border: 1px solid #000;
                        padding: 5px;
                    }
                    
                    @media print {
                        body {
                            margin: 0;
                            padding: 10px;
                        }
                        
                        button {
                            display: none !important;
                        }
                    }
                </style>
            </head>
            <body>
                ${reportContent.innerHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() {
                            window.close();
                        }, 100);
                    };
                </script>
            </body>
        </html>
    `);
  printWindow.document.close();
}

function getReportTitle() {
  switch (currentReportType) {
    case "assets":
      return "LAPORAN INVENTARIS ASET";
    case "borrowing":
      return "LAPORAN PEMINJAMAN ASET";
    case "maintenance":
      return "LAPORAN PEMELIHARAAN ASET";
    case "financial":
      return "LAPORAN KEUANGAN ASET";
    default:
      return "LAPORAN";
  }
}

function createAssetReport(table) {
  // Header tabel
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  [
    "No",
    "ID Aset",
    "Nama Aset",
    "Jenis",
    "Lokasi",
    "Kondisi",
    "Status",
    "Harga",
  ].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.cssText = `
            background-color: #f2f2f2;
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            font-weight: bold;
        `;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Isi tabel
  const tbody = document.createElement("tbody");

  assets.forEach((asset, index) => {
    const row = document.createElement("tr");

    [
      index + 1,
      asset.id,
      asset.name,
      asset.typeName,
      asset.location,
      asset.condition,
      asset.status,
      formatCurrency(asset.price),
    ].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      td.style.cssText = `
                border: 1px solid #000;
                padding: 8px;
            `;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

function createBorrowingReport(table) {
  // Header tabel
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  [
    "No",
    "ID Peminjaman",
    "Peminjam",
    "Aset",
    "Tanggal Pinjam",
    "Tanggal Kembali",
    "Status",
  ].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.cssText = `
            background-color: #f2f2f2;
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            font-weight: bold;
        `;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Isi tabel
  const tbody = document.createElement("tbody");

  borrowings.forEach((borrow, index) => {
    const row = document.createElement("tr");

    [
      index + 1,
      borrow.id,
      borrow.borrower,
      borrow.asset,
      formatDate(borrow.borrowDate),
      borrow.actualReturnDate
        ? formatDate(borrow.actualReturnDate)
        : formatDate(borrow.returnDate),
      borrow.status,
    ].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      td.style.cssText = `
                border: 1px solid #000;
                padding: 8px;
            `;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

function createMaintenanceReport(table) {
  // Header tabel
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  [
    "No",
    "ID Maintenance",
    "Aset",
    "Jenis Pemeliharaan",
    "Tanggal",
    "Biaya",
    "Status",
  ].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.cssText = `
            background-color: #f2f2f2;
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            font-weight: bold;
        `;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Isi tabel
  const tbody = document.createElement("tbody");

  maintenanceRecords.forEach((maintenance, index) => {
    const row = document.createElement("tr");

    [
      index + 1,
      maintenance.id,
      maintenance.assetName,
      maintenance.type,
      formatDate(maintenance.date),
      formatCurrency(maintenance.cost),
      maintenance.status,
    ].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      td.style.cssText = `
                border: 1px solid #000;
                padding: 8px;
            `;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

function createFinancialReport(table) {
  // Header tabel
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  ["No", "Keterangan", "Jumlah", "Total"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.cssText = `
            background-color: #f2f2f2;
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            font-weight: bold;
        `;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Isi tabel
  const tbody = document.createElement("tbody");

  // Hitung total
  const totalAssets = assets.length;
  const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);
  const maintenanceCost = maintenanceRecords.reduce(
    (sum, m) => sum + m.cost,
    0
  );
  const avgAssetValue = totalValue / (assets.length || 1);

  const rows = [
    ["1", "Total Aset", totalAssets, formatCurrency(totalValue)],
    [
      "2",
      "Total Biaya Pemeliharaan",
      maintenanceRecords.length,
      formatCurrency(maintenanceCost),
    ],
    ["3", "Rata-rata Nilai Aset", "-", formatCurrency(avgAssetValue)],
  ];

  rows.forEach((rowData) => {
    const row = document.createElement("tr");

    rowData.forEach((cellText) => {
      const td = document.createElement("td");
      td.textContent = cellText;
      td.style.cssText = `
                border: 1px solid #000;
                padding: 8px;
            `;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

function setupSearchFunctionality() {
  const assetSearch = document.getElementById("assetSearch");
  if (assetSearch) {
    let searchTimeout;
    assetSearch.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchAssets();
      }, 300);
    });
  }
}

// Enhanced search function
function searchAssets() {
  const searchField = document.getElementById("assetSearch");
  if (!searchField) return;

  const searchTerm = searchField.value.toLowerCase().trim();
  const tableBody = document.getElementById("assetsTable");
  if (!tableBody) return;

  // If search term is empty, show all assets
  if (searchTerm === "") {
    loadAssetsTable();
    return;
  }

  // Filter assets based on search term
  const filteredAssets = assets.filter(
    (asset) =>
      asset.id.toLowerCase().includes(searchTerm) ||
      asset.name.toLowerCase().includes(searchTerm) ||
      asset.typeName.toLowerCase().includes(searchTerm) ||
      asset.brand.toLowerCase().includes(searchTerm) ||
      asset.location.toLowerCase().includes(searchTerm) ||
      asset.status.toLowerCase().includes(searchTerm) ||
      asset.condition.toLowerCase().includes(searchTerm) ||
      formatCurrency(asset.price).toLowerCase().includes(searchTerm)
  );

  // Display filtered results
  displayFilteredAssets(filteredAssets);
}

// Function to display filtered assets
function displayFilteredAssets(filteredAssets) {
  const tableBody = document.getElementById("assetsTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (filteredAssets.length === 0) {
    tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">ðŸ”</div>
                    <p>Tidak ada aset yang ditemukan</p>
                    <p style="font-size: 0.875rem;">Coba dengan kata kunci lain atau periksa ejaan</p>
                </td>
            </tr>
        `;
    return;
  }

  filteredAssets.forEach((asset) => {
    const statusClass =
      asset.status === "Tersedia"
        ? "available"
        : asset.status === "Dipinjam"
        ? "borrowed"
        : "maintenance";

    const conditionClass =
      asset.condition === "Baik"
        ? "available"
        : asset.condition === "Rusak Ringan"
        ? "borrowed"
        : "maintenance";

    const canEdit =
      currentUserLevel === "Admin" || currentUserLevel === "Sarpras";

    const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <img src="${asset.image}" alt="${
      asset.name
    }" class="asset-image-preview" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;">
                        <span>${asset.name}</span>
                    </div>
                </td>
                <td>${asset.typeName}</td>
                <td>${asset.brand}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${
      asset.status
    }</span></td>
                <td><span class="status-badge ${conditionClass}">${
      asset.condition
    }</span></td>
                <td><span class="price-display">${formatCurrency(
                  asset.price
                )}</span></td>
                <td>
                    ${
                      canEdit
                        ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editAsset('${asset.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteAsset('${asset.id}')">Hapus</button>
                            <button class="btn btn-primary" onclick="viewAssetDetail('${asset.id}')">Detail</button>
                        </div>
                    `
                        : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'
                    }
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });

  // Highlight search terms in the results
  highlightSearchTerms();
}

// Function to highlight search terms in the table
function highlightSearchTerms() {
  const searchTerm = document
    .getElementById("assetSearch")
    .value.toLowerCase()
    .trim();
  if (!searchTerm) return;

  const tableCells = document.querySelectorAll("#assetsTable td");
  tableCells.forEach((cell) => {
    const originalText = cell.textContent;
    const highlightedText = originalText.replace(
      new RegExp(searchTerm, "gi"),
      (match) => `<span class="search-highlight">${match}</span>`
    );

    if (highlightedText !== originalText) {
      cell.innerHTML = highlightedText;
    }
  });
}

// Add this CSS class for highlighting
function addSearchHighlightStyle() {
  if (!document.getElementById("searchHighlightStyle")) {
    const style = document.createElement("style");
    style.id = "searchHighlightStyle";
    style.textContent = `
            .search-highlight {
                background-color: #FFEB3B;
                color: #000;
                padding: 0 2px;
                border-radius: 3px;
                font-weight: bold;
            }
            
            .search-box {
                position: relative;
                flex: 0 0 300px;
            }
            
            .search-box .clear-search {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                display: none;
            }
            
            .search-box:hover .clear-search {
                display: block;
            }
        `;
    document.head.appendChild(style);
  }
}

// Function to clear search
function clearSearch() {
  const searchField = document.getElementById("assetSearch");
  if (searchField) {
    searchField.value = "";
    loadAssetsTable();
  }
}

// Dark Mode Functions
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  updateDarkModeToggleIcon(isDarkMode);
  updateAssetChart(); // Update chart colors when dark mode changes
}

function updateDarkModeToggleIcon(isDarkMode) {
  const iconElement = document.getElementById("darkModeToggleIcon");
  if (iconElement) {
    iconElement.textContent = isDarkMode ? "☀️" : "🌙";
  }
}

function applySavedDarkModePreference() {
  const savedPreference = localStorage.getItem("darkMode");
  if (savedPreference === "true") {
    document.body.classList.add("dark-mode");
    updateDarkModeToggleIcon(true);
  } else {
    updateDarkModeToggleIcon(false);
  }
}

// [MODIFIKASI FINAL setupHorizontalScroll]
function setupHorizontalScroll() {
  // Apply to main content area
  const mainContent = document.getElementById("mainContent");
  if (mainContent) {
    mainContent.addEventListener("wheel", handleHorizontalScroll);
  }

  // Apply to all tables and scrollable containers
  const scrollableContainers = document.querySelectorAll(
    ".table-wrapper, .data-table-container, .content-area, .report-container, .modal-content"
  );
  scrollableContainers.forEach((container) => {
    container.addEventListener("wheel", handleHorizontalScroll);
  });

  // Setup scroll hint system
  setupScrollHint();

  // Setup table-specific hints
  setTimeout(setupTableScrollHints, 1000);
}
// Generic horizontal scroll handler
function handleHorizontalScroll(event) {
  if (event.shiftKey) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
  }
}

// Function to show horizontal scroll hint
function showHorizontalScrollHint() {
  // Check if there are any horizontally scrollable elements
  const scrollableElements = document.querySelectorAll(
    ".content-area, .table-wrapper, .data-table-container, .modal-content, .report-container"
  );
  let hasHorizontalScroll = false;

  scrollableElements.forEach((element) => {
    if (element.scrollWidth > element.clientWidth) {
      hasHorizontalScroll = true;
    }
  });

  // Create or update hint element
  let hintElement = document.getElementById("horizontalScrollHint");
  if (!hintElement) {
    hintElement = document.createElement("div");
    hintElement.id = "horizontalScrollHint";
    hintElement.className = "scroll-hint";
    hintElement.innerHTML =
      "🔍 Gunakan <strong>Shift + Scroll mouse</strong> untuk melihat konten lebih lengkap";
    document.body.appendChild(hintElement);
  }

  // Show or hide based on scrollability
  if (hasHorizontalScroll) {
    hintElement.classList.add("show");

    // Auto-hide after 5 seconds
    setTimeout(() => {
      hintElement.classList.remove("show");
    }, 5000);
  } else {
    hintElement.classList.remove("show");
  }
}

// Function to check and show hint on page load and resize
function setupScrollHint() {
  // Show hint on page load
  setTimeout(showHorizontalScrollHint, 1000);

  // Show hint on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(showHorizontalScrollHint, 500);
  });

  // Show hint when scrolling starts (optional)
  document.addEventListener(
    "wheel",
    (event) => {
      if (event.shiftKey) {
        const hintElement = document.getElementById("horizontalScrollHint");
        if (hintElement) {
          hintElement.classList.remove("show");
        }
      }
    },
    { passive: true }
  );
}

// Global event listener for dynamically created elements
document.addEventListener(
  "wheel",
  function (event) {
    if (event.shiftKey) {
      // Find the nearest scrollable parent
      let target = event.target;
      let scrollableElement = null;

      while (target && target !== document.body) {
        if (
          target.scrollWidth > target.clientWidth &&
          getComputedStyle(target).overflowX !== "hidden"
        ) {
          scrollableElement = target;
          break;
        }
        target = target.parentElement;
      }

      // If we found a scrollable element, scroll it horizontally
      if (scrollableElement) {
        event.preventDefault();
        scrollableElement.scrollLeft += event.deltaY;
      }
    }
  },
  { passive: false }
);

// Function to update footer statistics
function updateFooterStats() {
  // Update asset count
  const assetCount = assets.length;
  const assetCountElement = document.getElementById("footerAssetCount");
  if (assetCountElement) {
    assetCountElement.textContent = assetCount.toLocaleString();
  }

  // Update user count
  const userCount = users.length;
  const userCountElement = document.getElementById("footerUserCount");
  if (userCountElement) {
    userCountElement.textContent = userCount.toLocaleString();
  }

  // Update user status
  const userStatusElement = document.getElementById("footerUserStatus");
  if (userStatusElement && currentUser) {
    userStatusElement.textContent = currentUserLevel;
  }
}

// Function to update server time
function updateServerTime() {
  const timeElement = document.getElementById("footerServerTime");
  if (timeElement) {
    const now = new Date();
    const timeString = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const dateString = now.toLocaleDateString("id-ID", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    timeElement.textContent = `${timeString} • ${dateString}`;
  }
}

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Function to initialize footer
function initializeFooter() {
  // Update stats initially
  updateFooterStats();
  updateServerTime();

  // Update time every second
  setInterval(updateServerTime, 1000);

  // Update stats when data changes
  const originalFunctions = {
    loadAssetsTable: window.loadAssetsTable,
    loadUsersTable: window.loadUsersTable,
  };

  // Override functions to update footer stats
  window.loadAssetsTable = function () {
    originalFunctions.loadAssetsTable();
    updateFooterStats();
  };

  window.loadUsersTable = function () {
    originalFunctions.loadUsersTable();
    updateFooterStats();
  };
}

// Function to handle responsive footer margin
function updateFooterMargin() {
  const footer = document.querySelector(".footer");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  if (footer && sidebar && mainContent) {
    if (window.innerWidth >= 1024) {
      if (sidebar.classList.contains("collapsed")) {
        footer.style.marginLeft = "80px";
      } else {
        footer.style.marginLeft = "280px";
      }
    } else {
      footer.style.marginLeft = "0";
    }
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Add CSS animation for spin loading
  const style = document.createElement("style");
  style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .toast-message {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
    `;
  document.head.appendChild(style);

  // Apply saved dark mode preference on load
  applySavedDarkModePreference();

  // Login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", enhancedLogin);
  }

  // Pastikan library Chart.js dimuat
  if (typeof Chart === "undefined") {
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/chart.js/3.9.1/chart.min.js"
    )
      .then(() => {
        console.log("Chart.js loaded successfully");
      })
      .catch((error) => {
        console.error("Failed to load Chart.js:", error);
      });
  }

  // Inisialisasi chart dan DataTables setelah login berhasil
  const originalLogin = window.login;
  window.login = function (event) {
    event.preventDefault();
    originalLogin.call(this, event);

    // Setelah login berhasil, inisialisasi chart dan DataTables
    setTimeout(() => {
      initAssetChart();
      initDataTables();
    }, 500);
  };

  // Juga inisialisasi saat halaman dimuat jika sudah login
  if (currentUser) {
    setTimeout(() => {
      initAssetChart();
      initDataTables();
    }, 500);
  }

  // Asset form
  const assetForm = document.getElementById("assetForm");
  if (assetForm) {
    assetForm.addEventListener("submit", saveAsset);

    // Image preview for asset
    const assetImageInput = document.getElementById("assetImage");
    if (assetImageInput) {
      assetImageInput.addEventListener("change", function () {
        previewImage(this, "assetImagePreview");
      });
    }
  }

  // Borrow form
  const borrowForm = document.getElementById("borrowForm");
  if (borrowForm) {
    borrowForm.addEventListener("submit", saveBorrow);
  }

  // Maintenance form
  const maintenanceForm = document.getElementById("maintenanceForm");
  if (maintenanceForm) {
    maintenanceForm.addEventListener("submit", saveMaintenance);
  }

  // User form
  const userForm = document.getElementById("userForm");
  if (userForm) {
    userForm.addEventListener("submit", saveUser);

    // Image preview for user avatar
    const userAvatarInput = document.getElementById("userAvatar");
    if (userAvatarInput) {
      userAvatarInput.addEventListener("change", function () {
        previewImage(this, "userAvatarPreview");
      });
    }
  }

  // Request form
  const requestForm = document.getElementById("requestForm");
  if (requestForm) {
    requestForm.addEventListener("submit", saveRequest);
  }

  // Navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      showPage(page);
    });
  });

  // Initialize sidebar
  initializeSidebar();
  // Initialize search functionality
  addSearchHighlightStyle();
  setupSearchFunctionality();

  // Inisialisasi fungsi overlay
  setupOverlayClick();
  setupMenuItemsClick();

  // Setup horizontal scroll
  setupHorizontalScroll();

  initializeFooter();

  // Update footer margin on resize and sidebar toggle
  window.addEventListener("resize", updateFooterMargin);

  // Override sidebar toggle to update footer margin
  const originalToggleSidebar = window.toggleSidebar;
  window.toggleSidebar = function () {
    originalToggleSidebar();
    setTimeout(updateFooterMargin, 300);
  };

  // Asset search
  const assetSearch = document.getElementById("assetSearch");
  if (assetSearch) {
    assetSearch.addEventListener("input", searchAssets);
  }

  // Close modals when clicking outside
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active");
      }
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey) {
      let pageId = null;

      switch (e.key) {
        case "1":
          pageId = "dashboard";
          break;
        case "2":
          pageId = "assets";
          break;
        case "3":
          pageId = "borrowing";
          break;
        case "4":
          pageId = "maintenance";
          break;
        case "5":
          pageId = "users";
          break;
        case "6":
          pageId = "requests";
          break;
        case "7":
          pageId = "reports";
          break;
      }

      if (pageId) {
        e.preventDefault();
        showPage(pageId);
      }
    }

    // Close modal with Escape key
    if (e.key === "Escape") {
      const activeModals = document.querySelectorAll(".modal.active");
      activeModals.forEach((modal) => {
        modal.classList.remove("active");
      });
    }
  });

  // Console information
  console.log("Sistem Inventaris Kampus v2.0.0 - FIXED");
  console.log("Developed for Sekolah Tinggi Teknologi Cirebon");
  console.log("Features:");
  console.log("- Role-based access control");
  console.log("- Asset management with barcode");
  console.log("- Borrowing system");
  console.log("- Maintenance tracking");
  console.log("- Structured asset ID format");
  console.log("- Advanced reporting with PDF/Excel export");
  console.log("- Dynamic library loading for PDF/Excel");
  console.log("- Dark Mode Toggle");
  console.log("Keyboard shortcuts:");
  console.log("- Ctrl+1: Dashboard");
  console.log("- Ctrl+2: Assets");
  console.log("- Ctrl+3: Borrowing");
  console.log("- Ctrl+4: Maintenance");
  console.log("- Ctrl+5: Users");
  console.log("- Ctrl+6: Requests");
  console.log("- Ctrl+7: Reports");
  console.log("- Ctrl+B: Toggle sidebar");
  console.log("- Esc: Close active modal");
});
