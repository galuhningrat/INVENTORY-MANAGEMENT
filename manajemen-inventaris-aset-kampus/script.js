// Global Variables
let assets = [
  {
    id: "2024/01/ELK-0001",
    name: "Laptop HP ProBook",
    type: "ELK",
    typeName: "Elektronik",
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
    id: "2024/01/ELK-0002",
    name: "Proyektor Epson",
    type: "ELK",
    typeName: "Elektronik",
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
    purpose: "Presentasi di aula",
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
    requester: "Dr. Siti Nurhaliza",
    asset: "Komputer Desktop",
    type: "ELK",
    quantity: 5,
    requestDate: "2024-01-22",
    status: "Pending",
    reason: "Untuk keperluan lab komputer yang baru",
  },
  {
    id: "REQ-002",
    requester: "Ir. Joko Widodo",
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
      name: "Dr. Kaprodi",
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
      name: "Dr. Rektor",
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

function setupHorizontalScroll() {
  const contentArea = document.querySelector(".content-area");

  if (!contentArea) return;

  contentArea.addEventListener(
    "wheel",
    function (e) {
      // Check if Shift key is pressed
      if (e.shiftKey) {
        // Prevent vertical scrolling
        e.preventDefault();

        // Scroll horizontally based on wheel direction
        if (e.deltaY > 0) {
          // Scroll right
          this.scrollLeft += 50;
        } else {
          // Scroll left
          this.scrollLeft -= 50;
        }
      }
    },
    { passive: false }
  );
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

// Fungsi untuk menutup sidebar ketika overlay diklik
function setupOverlayClick() {
  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  if (!overlay || !sidebar || !menuToggle) return;

  overlay.addEventListener("click", function () {
    if (sidebar.classList.contains("active")) {
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

// Update the main toggleSidebar function to handle both mobile and desktop
function toggleSidebar() {
  if (isDesktop) {
    toggleDesktopSidebar();
  } else {
    toggleMobileSidebar();
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
  const mainContent = document.getElementById("mainContent");

  if (!sidebar || !mainContent) return;

  const isActive = sidebar.classList.contains("active");

  if (isActive) {
    // Hide sidebar
    sidebar.classList.remove("active");
    updateMenuToggleIcon(false);
  } else {
    // Show sidebar
    sidebar.classList.add("active");
    updateMenuToggleIcon(true);
  }
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
              },
            },
          },
          title: {
            display: true,
            text: "Distribusi Status Aset",
            font: {
              size: 16,
              weight: "bold",
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
        background-color: var(--bg-white);
        color: var(--text-primary);
        margin: 0 0.5rem;
      }
      
      .dataTables_filter input {
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 0.375rem 0.75rem;
        background-color: var(--bg-white);
        color: var(--text-primary);
        margin-left: 0.5rem;
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
      }
      
      .dataTables_paginate {
        margin-top: 1rem;
      }
      
      .dataTables_paginate .paginate_button {
        padding: 0.375rem 0.75rem;
        margin: 0 0.125rem;
        border: 1px solid var(--border-color);
        background-color: var(--bg-white);
        color: var(--text-primary);
        border-radius: 6px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .dataTables_paginate .paginate_button:hover {
        background-color: var(--bg-secondary);
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
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
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

          // Signature line (same width as generateReport - 200px ≈ 50mm)
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

// Search Functionality
function setupSearchFunctionality() {
  const assetSearch = document.getElementById("assetSearch");
  if (assetSearch) {
    // Clear previous event listeners to avoid duplicates
    assetSearch.removeEventListener("input", handleAssetSearch);
    // Add new event listener
    assetSearch.addEventListener("input", handleAssetSearch);

    // Add debounce function to improve performance
    let searchTimeout;
    function handleAssetSearch() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchAssets();
      }, 300); // 300ms delay
    }
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
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
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
