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
        barcode: "HP123456789"
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
        barcode: "EP789012345"
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
        barcode: "OL345678901"
    }
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
        purpose: "Presentasi di aula"
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
        purpose: "Tugas akhir"
    }
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
        technician: "Pak Bambang"
    }
];

let users = [
    {
        id: 1,
        name: "Administrator",
        username: "admin",
        level: "Admin",
        status: "Aktif",
        avatar: "assets/admin.png",
        email: "admin@stti.ac.id"
    },
    {
        id: 2,
        name: "Staff Sarpras",
        username: "sarpras",
        level: "Sarpras",
        status: "Aktif",
        avatar: "assets/sarpras.png",
        email: "sarpras@stti.ac.id"
    },
    {
        id: 3,
        name: "Muhammad Sugiarto, S.E., M.M.",
        username: "rektor",
        level: "Rektor",
        status: "Aktif",
        avatar: "assets/rektor.png",
        email: "rektor@stti.ac.id"
    },
    {
        id: 4,
        name: "Bima Azis Kusuma, S.T., M.T.",
        username: "kaprodi",
        level: "kaprodi",
        status: "Aktif",
        avatar: "assets/kaprodi.png",
        email: "kaprodi@stti.ac.id"
    },
    {
        id: 5,
        name: "Mrs. Nazilah",
        username: "keuangan",
        level: "keuangan",
        status: "Aktif",
        avatar: "assets/keuangan.png",
        email: "mrsnazilah@stti.ac.id"
    }
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
        reason: "Untuk keperluan lab komputer yang baru"
    },
    {
        id: "REQ-002",
        requester: "Ir. Joko Widodo",
        asset: "Printer Laser",
        type: "ELK",
        quantity: 2,
        requestDate: "2024-01-21",
        status: "Disetujui",
        reason: "Untuk keperluan administrasi prodi"
    }
];

// User permissions
const userPermissions = {
    'Admin': ['dashboard', 'assets', 'borrowing', 'maintenance', 'users', 'requests', 'reports'],
    'Sarpras': ['dashboard', 'assets', 'borrowing', 'maintenance', 'reports'],
    'Rektor': ['dashboard', 'reports'],
    'Kaprodi': ['dashboard', 'requests', 'reports'],
    'Keuangan': ['dashboard', 'requests', 'reports']
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

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function generateAssetId(type) {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const counter = (nextAssetCounter++).toString().padStart(4, '0');
    return `${year}/${month}/${type}-${counter}`;
}

function generateBorrowId() {
    return `BRW-${(nextBorrowCounter++).toString().padStart(3, '0')}`;
}

function generateMaintenanceId() {
    return `MNT-${(nextMaintenanceCounter++).toString().padStart(3, '0')}`;
}

function generateRequestId() {
    return `REQ-${(nextRequestCounter++).toString().padStart(3, '0')}`;
}

function showToast(message, type = 'success') {
    // Create toast element if not exists
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
        `;
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.style.cssText = `
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b'};
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
        toast.style.transform = 'translateX(0)';
    }, 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function showLoading() {
    let loadingOverlay = document.getElementById('loadingOverlay');
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loadingOverlay';
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
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}Error`);

        if (!input.value) {
            if (errorElement) {
                errorElement.textContent = 'Field ini wajib diisi';
                errorElement.style.display = 'block';
            }
            input.classList.add('error');
            isValid = false;
        } else {
            if (errorElement) {
                errorElement.style.display = 'none';
            }
            input.classList.remove('error');
        }

        // Additional validation for specific fields
        if (input.id === 'assetPrice' && input.value < 1000) {
            if (errorElement) {
                errorElement.textContent = 'Harga minimal 1000';
                errorElement.style.display = 'block';
            }
            input.classList.add('error');
            isValid = false;
        }

        if (input.id === 'userPassword' && input.value.length < 6) {
            if (errorElement) {
                errorElement.textContent = 'Password minimal 6 karakter';
                errorElement.style.display = 'block';
            }
            input.classList.add('error');
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
        }

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}

// Function to dynamically load external scripts
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Authentication Functions
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validCredentials = [
        { username: 'admin', password: 'admin123', name: 'Administrator', level: 'Admin', avatar: 'assets/admin.png' },
        { username: 'sarpras', password: 'sarpras123', name: 'Staff Sarpras', level: 'Sarpras', avatar: 'assets/sarpras.png' },
        { username: 'kaprodi', password: 'kaprodi123', name: 'Dr. Kaprodi', level: 'Kaprodi', avatar: 'assets/kaprodi.png' },
        { username: 'keuangan', password: 'keuangan123', name: 'Staff Keuangan', level: 'Keuangan', avatar: 'assets/keuangan.png' },
        { username: 'rektor', password: 'rektor123', name: 'Dr. Rektor', level: 'Rektor', avatar: 'assets/rektor.png' }
    ];

    const user = validCredentials.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user.name;
        currentUserLevel = user.level;
        currentUserAvatar = user.avatar;

        // Update UI with user info
        const currentUserElement = document.getElementById('currentUser');
        const userRoleElement = document.getElementById('userRole');
        const userAvatarImg = document.getElementById('userAvatarImg');
        
        if (currentUserElement) currentUserElement.textContent = currentUser;
        if (userRoleElement) userRoleElement.textContent = user.level;
        if (userAvatarImg) userAvatarImg.src = user.avatar;

        // Hide login, show dashboard
        const loginPage = document.getElementById('loginPage');
        const dashboard = document.getElementById('dashboard');
        
        if (loginPage) loginPage.style.display = 'none';
        if (dashboard) dashboard.style.display = 'block';

        // Setup navigation based on permissions
        setupNavigation();

        showPage('dashboard');
        updateStatistics();
        loadRecentAssets();

        showToast(`Selamat datang, ${currentUser}!`);
    } else {
        showToast('Username atau password salah!', 'error');
    }
}

function logout() {
    currentUser = null;
    currentUserLevel = null;
    
    const loginPage = document.getElementById('loginPage');
    const dashboard = document.getElementById('dashboard');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    if (loginPage) loginPage.style.display = 'flex';
    if (dashboard) dashboard.style.display = 'none';
    if (usernameField) usernameField.value = '';
    if (passwordField) passwordField.value = '';
    
    showToast('Berhasil logout');
}

function setupNavigation() {
    const allowedPages = userPermissions[currentUserLevel] || [];
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (allowedPages.includes(page)) {
            link.style.display = 'flex';
        } else {
            link.style.display = 'none';
        }
    });
}

// Navigation Functions
function showPage(pageId) {
    // Check permissions
    const allowedPages = userPermissions[currentUserLevel] || [];
    if (!allowedPages.includes(pageId)) {
        showToast('Anda tidak memiliki akses ke halaman ini', 'error');
        return;
    }

    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.style.display = 'none');

    const targetPage = document.getElementById(pageId + 'Content');
    if (targetPage) {
        targetPage.style.display = 'block';
        targetPage.classList.add('animate-fade-in');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    const titles = {
        dashboard: 'Dashboard',
        assets: 'Manajemen Aset',
        borrowing: 'Peminjaman',
        maintenance: 'Pemeliharaan',
        users: 'Pengguna',
        requests: 'Pengajuan Aset',
        reports: 'Laporan'
    };

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = titles[pageId] || pageId;
    }

    // Load data for specific pages
    switch (pageId) {
        case 'assets':
            loadAssetsTable();
            break;
        case 'borrowing':
            loadBorrowingTable();
            loadAvailableAssets();
            break;
        case 'maintenance':
            loadMaintenanceTable();
            loadAssetsForMaintenance();
            break;
        case 'users':
            loadUsersTable();
            break;
        case 'requests':
            loadRequestsTable();
            break;
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    if (sidebar) {
        sidebar.classList.toggle('active');
    }
    if (window.innerWidth >= 1024 && mainContent) {
        mainContent.classList.toggle('sidebar-open');
    }
}

// Statistics Functions
function updateStatistics() {
    const totalAssets = assets.length;
    const borrowedAssets = assets.filter(asset => asset.status === 'Dipinjam').length;
    const availableAssets = assets.filter(asset => asset.status === 'Tersedia').length;
    const maintenanceAssets = assets.filter(asset => asset.status === 'Maintenance').length;

    const totalAssetsElement = document.getElementById('totalAssets');
    const borrowedAssetsElement = document.getElementById('borrowedAssets');
    const availableAssetsElement = document.getElementById('availableAssets');
    const maintenanceAssetsElement = document.getElementById('maintenanceAssets');

    if (totalAssetsElement) totalAssetsElement.textContent = totalAssets;
    if (borrowedAssetsElement) borrowedAssetsElement.textContent = borrowedAssets;
    if (availableAssetsElement) availableAssetsElement.textContent = availableAssets;
    if (maintenanceAssetsElement) maintenanceAssetsElement.textContent = maintenanceAssets;
}

function loadRecentAssets() {
    const tableBody = document.getElementById('recentAssetsTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    const recentAssets = assets.slice(-5).reverse();

    recentAssets.forEach(asset => {
        const statusClass = asset.status === 'Tersedia' ? 'available' :
            asset.status === 'Dipinjam' ? 'borrowed' : 'maintenance';

        const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>${asset.name}</td>
                <td>${asset.typeName}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${asset.status}</span></td>
                <td>${formatDate(asset.dateAdded)}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Asset Management Functions
function loadAssetsTable() {
    const tableBody = document.getElementById('assetsTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    assets.forEach(asset => {
        const statusClass = asset.status === 'Tersedia' ? 'available' :
            asset.status === 'Dipinjam' ? 'borrowed' : 'maintenance';

        const conditionClass = asset.condition === 'Baik' ? 'available' :
            asset.condition === 'Rusak Ringan' ? 'borrowed' : 'maintenance';

        const canEdit = currentUserLevel === 'Admin' || currentUserLevel === 'Sarpras';

        const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <img src="${asset.image}" alt="${asset.name}" class="asset-image-preview" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;">
                        <span>${asset.name}</span>
                    </div>
                </td>
                <td>${asset.typeName}</td>
                <td>${asset.brand}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${asset.status}</span></td>
                <td><span class="status-badge ${conditionClass}">${asset.condition}</span></td>
                <td><span class="price-display">${formatCurrency(asset.price)}</span></td>
                <td>
                    ${canEdit ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editAsset('${asset.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteAsset('${asset.id}')">Hapus</button>
                            <button class="btn btn-primary" onclick="viewAssetDetail('${asset.id}')">Detail</button>
                        </div>
                    ` : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function openAssetModal(assetId = null) {
    if (currentUserLevel !== 'Admin' && currentUserLevel !== 'Sarpras') {
        showToast('Anda tidak memiliki izin untuk menambah/edit aset', 'error');
        return;
    }

    const modal = document.getElementById('assetModal');
    const title = document.querySelector('#assetModal .modal-title');

    if (!modal) return;

    editingAssetId = assetId;

    if (assetId) {
        if (title) title.textContent = 'Edit Aset';
        const asset = assets.find(a => a.id === assetId);
        if (asset) {
            const nameField = document.getElementById('assetName');
            const typeField = document.getElementById('assetType');
            const brandField = document.getElementById('assetBrand');
            const serialField = document.getElementById('assetSerial');
            const priceField = document.getElementById('assetPrice');
            const purchaseDateField = document.getElementById('assetPurchaseDate');
            const locationField = document.getElementById('assetLocation');
            const conditionField = document.getElementById('assetCondition');

            if (nameField) nameField.value = asset.name;
            if (typeField) typeField.value = asset.type;
            if (brandField) brandField.value = asset.brand;
            if (serialField) serialField.value = asset.serial;
            if (priceField) priceField.value = asset.price;
            if (purchaseDateField) purchaseDateField.value = asset.purchaseDate;
            if (locationField) locationField.value = asset.location;
            if (conditionField) conditionField.value = asset.condition;

            // Set image preview
            const preview = document.getElementById('assetImagePreview');
            if (preview) {
                preview.innerHTML = `<img src="${asset.image}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 8px;">`;
            }
        }
    } else {
        if (title) title.textContent = 'Tambah Aset Baru';
        const assetForm = document.getElementById('assetForm');
        if (assetForm) assetForm.reset();
        
        const preview = document.getElementById('assetImagePreview');
        if (preview) preview.innerHTML = '';
        
        // Set default purchase date to today
        const purchaseDateField = document.getElementById('assetPurchaseDate');
        if (purchaseDateField) {
            purchaseDateField.value = new Date().toISOString().split('T')[0];
        }
    }

    modal.classList.add('active');
}

function viewAssetDetail(id) {
    const asset = assets.find(a => a.id === id);
    if (!asset) return;

    const modal = document.getElementById('assetDetailModal');
    const content = document.getElementById('assetDetailContent');

    if (!modal || !content) return;

    content.innerHTML = `
        <div class="asset-detail">
            <div class="detail-row">
                <div class="detail-image">
                    <img src="${asset.image}" alt="${asset.name}" style="max-width: 100%; border-radius: 8px;">
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
                    <p><strong>Status:</strong> <span class="status-badge ${asset.status === 'Tersedia' ? 'available' : asset.status === 'Dipinjam' ? 'borrowed' : 'maintenance'}">${asset.status}</span></p>
                </div>
                <div class="detail-col">
                    <p><strong>Kondisi:</strong> <span class="status-badge ${asset.condition === 'Baik' ? 'available' : asset.condition === 'Rusak Ringan' ? 'borrowed' : 'maintenance'}">${asset.condition}</span></p>
                    <p><strong>Harga:</strong> ${formatCurrency(asset.price)}</p>
                </div>
            </div>
            <div class="detail-row">
                <p><strong>Tanggal Pembelian:</strong> ${formatDate(asset.purchaseDate)}</p>
                <p><strong>Tanggal Masuk:</strong> ${formatDate(asset.dateAdded)}</p>
            </div>
            <div class="btn-group" style="margin-top: 1rem;">
                <button class="btn btn-primary" onclick="closeModal('assetDetailModal')">Tutup</button>
                <button class="btn btn-secondary" onclick="openBarcodeModal('${asset.barcode}')">Lihat Barcode</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function openBarcodeModal(barcode) {
    const modal = document.getElementById('barcodeModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function editAsset(id) {
    openAssetModal(id);
}

function deleteAsset(id) {
    if (currentUserLevel !== 'Admin' && currentUserLevel !== 'Sarpras') {
        showToast('Anda tidak memiliki izin untuk menghapus aset', 'error');
        return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus aset ini?')) {
        assets = assets.filter(asset => asset.id !== id);
        loadAssetsTable();
        updateStatistics();
        loadRecentAssets();
        showToast('Aset berhasil dihapus!');
    }
}

function saveAsset(event) {
    event.preventDefault();

    if (!validateForm('assetForm')) return;

    const saveBtn = document.getElementById('saveAssetBtn');
    if (saveBtn) {
        saveBtn.classList.add('loading');
        saveBtn.disabled = true;
    }

    showLoading();

    // Simulate async operation
    setTimeout(() => {
        const typeMapping = {
            'ELK': 'Elektronik',
            'FUR': 'Furniture',
            'KDR': 'Kendaraan',
            'ATK': 'Alat Tulis',
            'LAN': 'Lainnya'
        };

        const assetTypeField = document.getElementById('assetType');
        const assetNameField = document.getElementById('assetName');
        const assetImageInput = document.getElementById('assetImage');

        if (!assetTypeField || !assetNameField) {
            hideLoading();
            if (saveBtn) {
                saveBtn.classList.remove('loading');
                saveBtn.disabled = false;
            }
            return;
        }

        const assetType = assetTypeField.value;
        let assetImageUrl = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${encodeURIComponent(assetNameField.value)}`;

        // Handle image upload
        if (assetImageInput && assetImageInput.files.length > 0) {
            const file = assetImageInput.files[0];
            assetImageUrl = URL.createObjectURL(file);
        } else if (editingAssetId) {
            const existingAsset = assets.find(a => a.id === editingAssetId);
            if (existingAsset) {
                assetImageUrl = existingAsset.image;
            }
        }

        const assetData = {
            name: assetNameField.value,
            type: assetType,
            typeName: typeMapping[assetType],
            brand: document.getElementById('assetBrand')?.value || '',
            serial: document.getElementById('assetSerial')?.value || '',
            price: parseInt(document.getElementById('assetPrice')?.value || 0),
            purchaseDate: document.getElementById('assetPurchaseDate')?.value || '',
            location: document.getElementById('assetLocation')?.value || '',
            condition: document.getElementById('assetCondition')?.value || '',
            status: 'Tersedia',
            image: assetImageUrl,
            barcode: (document.getElementById('assetSerial')?.value || '') + Math.random().toString(36).substr(2, 3).toUpperCase()
        };

        if (editingAssetId) {
            // Edit existing asset
            const assetIndex = assets.findIndex(a => a.id === editingAssetId);
            if (assetIndex !== -1) {
                assets[assetIndex] = { ...assets[assetIndex], ...assetData };
                showToast('Aset berhasil diupdate!');
            }
        } else {
            // Add new asset
            const existingAsset = assets.find(a => a.serial === assetData.serial);
            if (existingAsset) {
                showToast('Nomor seri sudah ada!', 'error');
                hideLoading();
                if (saveBtn) {
                    saveBtn.classList.remove('loading');
                    saveBtn.disabled = false;
                }
                return;
            }

            assetData.id = generateAssetId(assetType);
            assetData.dateAdded = new Date().toISOString().split('T')[0];
            assets.push(assetData);
            showToast('Aset berhasil ditambahkan!');
        }

        closeModal('assetModal');
        loadAssetsTable();
        updateStatistics();
        loadRecentAssets();

        if (saveBtn) {
            saveBtn.classList.remove('loading');
            saveBtn.disabled = false;
        }
        hideLoading();
    }, 1500);
}

// Borrowing Management Functions
function loadBorrowingTable() {
    const tableBody = document.getElementById('borrowingTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    borrowings.forEach(borrow => {
        const statusClass = borrow.status === 'Aktif' ? 'borrowed' : 'available';
        const canManage = currentUserLevel === 'Admin' || currentUserLevel === 'Sarpras';

        const row = `
            <tr>
                <td><strong>${borrow.id}</strong></td>
                <td>${borrow.borrower} <small>(${borrow.borrowerRole})</small></td>
                <td>${borrow.asset}</td>
                <td>${formatDate(borrow.borrowDate)}</td>
                <td>${formatDate(borrow.returnDate)}</td>
                <td><span class="status-badge ${statusClass}">${borrow.status}</span></td>
                <td>
                    ${borrow.status === 'Aktif' && canManage ?
                `<button class="btn btn-success" onclick="returnAsset('${borrow.id}')">Kembalikan</button>` :
                `<span style="color: var(--text-secondary); font-size: 0.75rem;">${borrow.status}</span>`
            }
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function loadAvailableAssets() {
    const select = document.getElementById('borrowAsset');
    if (!select) return;

    select.innerHTML = '<option value="">Pilih Aset</option>';

    const availableAssets = assets.filter(asset => asset.status === 'Tersedia');
    availableAssets.forEach(asset => {
        select.innerHTML += `<option value="${asset.name}" data-id="${asset.id}">${asset.name} (${asset.typeName})</option>`;
    });
}

function openBorrowModal() {
    if (currentUserLevel !== 'Admin' && currentUserLevel !== 'Sarpras') {
        showToast('Anda tidak memiliki izin untuk mencatat peminjaman', 'error');
        return;
    }

    const modal = document.getElementById('borrowModal');
    if (modal) {
        modal.classList.add('active');
    }
    
    loadAvailableAssets();

    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekStr = nextWeek.toISOString().split('T')[0];

    const borrowDateField = document.getElementById('borrowDate');
    const returnDateField = document.getElementById('returnDate');
    
    if (borrowDateField) borrowDateField.value = today;
    if (returnDateField) returnDateField.value = nextWeekStr;
}

function saveBorrow(event) {
    event.preventDefault();

    if (!validateForm('borrowForm')) return;

    const borrowAssetField = document.getElementById('borrowAsset');
    const borrowData = {
        id: generateBorrowId(),
        borrower: document.getElementById('borrowerName')?.value || '',
        borrowerRole: document.getElementById('borrowerRole')?.value || '',
        asset: borrowAssetField?.value || '',
        assetId: borrowAssetField?.selectedOptions[0]?.dataset?.id || '',
        borrowDate: document.getElementById('borrowDate')?.value || '',
        returnDate: document.getElementById('returnDate')?.value || '',
        actualReturnDate: null,
        purpose: document.getElementById('borrowPurpose')?.value || '',
        status: 'Aktif'
    };

    borrowings.push(borrowData);

    // Update asset status
    const asset = assets.find(a => a.name === borrowData.asset);
    if (asset) {
        asset.status = 'Dipinjam';
    }

    closeModal('borrowModal');
    loadBorrowingTable();
    updateStatistics();
    loadRecentAssets();

    showToast('Peminjaman berhasil dicatat!');
}

function returnAsset(borrowId) {
    if (confirm('Konfirmasi pengembalian aset?')) {
        const borrow = borrowings.find(b => b.id === borrowId);
        if (borrow) {
            borrow.status = 'Selesai';
            borrow.actualReturnDate = new Date().toISOString().split('T')[0];

            // Update asset status
            const asset = assets.find(a => a.name === borrow.asset);
            if (asset) {
                asset.status = 'Tersedia';
            }

            loadBorrowingTable();
            updateStatistics();
            loadRecentAssets();

            showToast('Aset berhasil dikembalikan!');
        }
    }
}

// Maintenance Management Functions
function loadMaintenanceTable() {
    const tableBody = document.getElementById('maintenanceTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    maintenanceRecords.forEach(maintenance => {
        const statusClass = maintenance.status === 'Selesai' ? 'available' : 'maintenance';
        const canManage = currentUserLevel === 'Admin' || currentUserLevel === 'Sarpras';

        const row = `
            <tr>
                <td><strong>${maintenance.id}</strong></td>
                <td>${maintenance.assetName}</td>
                <td>${maintenance.type}</td>
                <td>${formatDate(maintenance.date)}</td>
                <td><span class="price-display">${formatCurrency(maintenance.cost)}</span></td>
                <td><span class="status-badge ${statusClass}">${maintenance.status}</span></td>
                <td>
                    ${canManage ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="viewMaintenanceDetail('${maintenance.id}')">Detail</button>
                        </div>
                    ` : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function loadAssetsForMaintenance() {
    const select = document.getElementById('maintenanceAsset');
    if (!select) return;

    select.innerHTML = '<option value="">Pilih Aset</option>';

    assets.forEach(asset => {
        select.innerHTML += `<option value="${asset.name}" data-id="${asset.id}">${asset.name} (${asset.typeName})</option>`;
    });
}

function openMaintenanceModal() {
    if (currentUserLevel !== 'Admin' && currentUserLevel !== 'Sarpras') {
        showToast('Anda tidak memiliki izin untuk mencatat pemeliharaan', 'error');
        return;
    }

    const modal = document.getElementById('maintenanceModal');
    if (modal) {
        modal.classList.add('active');
    }
    
    loadAssetsForMaintenance();

    // Set default date to today
    const maintenanceDateField = document.getElementById('maintenanceDate');
    if (maintenanceDateField) {
        maintenanceDateField.value = new Date().toISOString().split('T')[0];
    }
}

function saveMaintenance(event) {
    event.preventDefault();

    if (!validateForm('maintenanceForm')) return;

    const maintenanceAssetField = document.getElementById('maintenanceAsset');
    const maintenanceData = {
        id: generateMaintenanceId(),
        assetName: maintenanceAssetField?.value || '',
        assetId: maintenanceAssetField?.selectedOptions[0]?.dataset?.id || '',
        type: document.getElementById('maintenanceType')?.value || '',
        date: document.getElementById('maintenanceDate')?.value || '',
        cost: parseInt(document.getElementById('maintenanceCost')?.value || 0),
        description: document.getElementById('maintenanceDescription')?.value || '',
        status: 'Selesai',
        technician: currentUser
    };

    maintenanceRecords.push(maintenanceData);

    // Update asset status if needed
    const asset = assets.find(a => a.name === maintenanceData.assetName);
    if (asset && maintenanceData.type === 'Corrective') {
        asset.condition = 'Baik';
        asset.status = 'Tersedia';
    }

    closeModal('maintenanceModal');
    loadMaintenanceTable();
    updateStatistics();
    loadRecentAssets();

    showToast('Catatan pemeliharaan berhasil disimpan!');
}

function viewMaintenanceDetail(id) {
    const maintenance = maintenanceRecords.find(m => m.id === id);
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
    const tableBody = document.getElementById('usersTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    users.forEach(user => {
        const canManage = currentUserLevel === 'Admin';

        const row = `
            <tr>
                <td><strong>${user.id}</strong></td>
                <td>
                    <img src="${user.avatar}" alt="${user.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                </td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><span class="status-badge available">${user.level}</span></td>
                <td><span class="status-badge available">${user.status}</span></td>
                <td>
                    ${canManage ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editUser(${user.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteUser(${user.id})">Hapus</button>
                        </div>
                    ` : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function openUserModal() {
    if (currentUserLevel !== 'Admin') {
        showToast('Anda tidak memiliki izin untuk menambah pengguna', 'error');
        return;
    }
    const modal = document.getElementById('userModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    if (!user) return;

    const modal = document.getElementById('userModal');
    const title = document.querySelector('#userModal .modal-title');

    if (title) title.textContent = 'Edit Pengguna';
    
    const nameField = document.getElementById('userName');
    const usernameField = document.getElementById('userUsername');
    const levelField = document.getElementById('userLevel');
    
    if (nameField) nameField.value = user.name;
    if (usernameField) usernameField.value = user.username;
    if (levelField) levelField.value = user.level;

    // Set image preview
    const preview = document.getElementById('userAvatarPreview');
    if (preview) {
        preview.innerHTML = `<img src="${user.avatar}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 8px;">`;
    }

    if (modal) {
        modal.classList.add('active');
    }
}

function deleteUser(id) {
    if (currentUserLevel !== 'Admin') {
        showToast('Anda tidak memiliki izin untuk menghapus pengguna', 'error');
        return;
    }

    if (id === 1) {
        showToast('Tidak dapat menghapus user admin utama', 'error');
        return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
        users = users.filter(user => user.id !== id);
        loadUsersTable();
        showToast('Pengguna berhasil dihapus!');
    }
}

function saveUser(event) {
    event.preventDefault();

    if (!validateForm('userForm')) return;

    const userAvatarInput = document.getElementById('userAvatar');
    const userNameField = document.getElementById('userName');
    const usernameField = document.getElementById('userUsername');
    
    let userAvatarUrl = `https://via.placeholder.com/100x100/64748b/ffffff?text=${userNameField?.value?.charAt(0)?.toUpperCase() || 'U'}`;

    // Handle image upload
    if (userAvatarInput && userAvatarInput.files.length > 0) {
        const file = userAvatarInput.files[0];
        userAvatarUrl = URL.createObjectURL(file);
    }

    const userData = {
        id: nextUserCounter++,
        name: userNameField?.value || '',
        username: usernameField?.value || '',
        level: document.getElementById('userLevel')?.value || '',
        status: 'Aktif',
        avatar: userAvatarUrl,
        email: `${usernameField?.value || ''}@sttc.ac.id`
    };

    // Check if username already exists
    const existingUser = users.find(u => u.username === userData.username);
    if (existingUser) {
        showToast('Username sudah ada!', 'error');
        return;
    }

    users.push(userData);

    closeModal('userModal');
    loadUsersTable();

    showToast('Pengguna berhasil ditambahkan!');
}

// Request Management Functions
function loadRequestsTable() {
    const tableBody = document.getElementById('requestsTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    requests.forEach(request => {
        const statusClass = request.status === 'Pending' ? 'pending' :
            request.status === 'Disetujui' ? 'approved' : 'rejected';

        const canManage = (currentUserLevel === 'Admin' || currentUserLevel === 'Keuangan') && request.status === 'Pending';

        const row = `
            <tr>
                <td><strong>${request.id}</strong></td>
                <td>${request.requester}</td>
                <td>${request.asset}</td>
                <td><span class="status-badge available">${request.quantity}</span></td>
                <td>${formatDate(request.requestDate)}</td>
                <td><span class="status-badge ${statusClass}">${request.status}</span></td>
                <td>
                    ${canManage ? `
                        <div class="action-buttons">
                            <button class="btn btn-success" onclick="approveRequest('${request.id}')">Setujui</button>
                            <button class="btn btn-danger" onclick="rejectRequest('${request.id}')">Tolak</button>
                        </div>
                    ` : `<span style="color: var(--text-secondary); font-size: 0.75rem;">${request.status}</span>`}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function openRequestModal() {
    const canCreate = ['Admin', 'Kaprodi', 'Sarpras'].includes(currentUserLevel);
    if (!canCreate) {
        showToast('Anda tidak memiliki izin untuk mengajukan aset', 'error');
        return;
    }
    const modal = document.getElementById('requestModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function saveRequest(event) {
    event.preventDefault();

    if (!validateForm('requestForm')) return;

    const requestData = {
        id: generateRequestId(),
        requester: currentUser,
        asset: document.getElementById('requestAsset')?.value || '',
        type: document.getElementById('requestType')?.value || '',
        quantity: parseInt(document.getElementById('requestQuantity')?.value || 1),
        requestDate: new Date().toISOString().split('T')[0],
        status: 'Pending',
        reason: document.getElementById('requestReason')?.value || ''
    };

    requests.push(requestData);

    closeModal('requestModal');
    loadRequestsTable();

    showToast('Pengajuan berhasil dikirim!');
}

function approveRequest(id) {
    const request = requests.find(r => r.id === id);
    if (request) {
        request.status = 'Disetujui';
        loadRequestsTable();
        showToast('Pengajuan disetujui!');
    }
}

function rejectRequest(id) {
    const request = requests.find(r => r.id === id);
    if (request) {
        request.status = 'Ditolak';
        loadRequestsTable();
        showToast('Pengajuan ditolak!');
    }
}

// Modal Functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
    
    if (modalId === 'assetModal') {
        editingAssetId = null;
        const assetForm = document.getElementById('assetForm');
        if (assetForm) assetForm.reset();
    }
}

// Report Functions
function generateReport(type) {
    currentReportType = type;
    const reportPreview = document.getElementById('reportPreview');
    if (!reportPreview) return;
    
    reportPreview.innerHTML = '';

    const reportContainer = document.createElement('div');
    reportContainer.className = 'report-container';

    // Header laporan
    const header = document.createElement('div');
    header.className = 'report-header';
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
        <p style="text-align: center; font-size: 11pt; margin-bottom: 15px;">Tanggal: ${formatDate(new Date().toISOString().split('T')[0])}</p>
    `;
    reportContainer.appendChild(header);

    // Tabel laporan
    const table = document.createElement('table');
    table.className = 'report-table';
    table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        font-size: 10pt;
    `;

    switch (type) {
        case 'assets':
            createAssetReport(table);
            break;
        case 'borrowing':
            createBorrowingReport(table);
            break;
        case 'maintenance':
            createMaintenanceReport(table);
            break;
        case 'financial':
            createFinancialReport(table);
            break;
    }

    reportContainer.appendChild(table);

    // Footer laporan
    const footer = document.createElement('div');
    footer.className = 'report-footer';
    footer.innerHTML = `
        <div style="text-align: right; margin-top: 50px;">
            <p style="margin-bottom: 50px;">Cirebon, ${formatDate(new Date().toISOString().split('T')[0])}</p>
            <div style="border-top: 1px solid #000; width: 200px; margin-left: auto; margin-bottom: 10px;"></div>
            <p style="font-weight: bold; margin: 0;">${currentUser}</p>
            <p style="margin: 0;">${currentUserLevel}</p>
        </div>
    `;
    reportContainer.appendChild(footer);

    // Tombol aksi
    const actionButtons = document.createElement('div');
    actionButtons.style.cssText = `
        margin-top: 20px;
        display: flex;
        gap: 10px;
        justify-content: center;
    `;
    
    const printBtn = document.createElement('button');
    printBtn.className = 'btn btn-primary';
    printBtn.textContent = 'Cetak Laporan';
    printBtn.onclick = printReport;
    
    const pdfBtn = document.createElement('button');
    pdfBtn.className = 'btn btn-secondary';
    pdfBtn.textContent = 'Export PDF';
    pdfBtn.onclick = exportToPDF;
    
    const excelBtn = document.createElement('button');
    excelBtn.className = 'btn btn-success';
    excelBtn.textContent = 'Export Excel';
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
        showToast('Pilih jenis laporan terlebih dahulu', 'error');
        return;
    }

    showToast('Memuat library PDF...', 'info');
    
    // Load jsPDF dynamically
    Promise.all([
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'),
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js')
    ]).then(() => {
        try {
            // Create PDF using jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            // Set margins
            const marginLeft = 15;
            const marginRight = 15;
            const marginTop = 20;
            const pageWidth = doc.internal.pageSize.getWidth();

            // Header Section - Logo and Institution Info (same as generateReport layout)
            try {
                const logo = '/assets/logo-stti.png';
                // Convert 80px to mm (approximately 21mm)
                doc.addImage(logo, 'PNG', marginLeft, marginTop, 21, 21);
            } catch (logoError) {
                console.warn('Logo tidak dapat dimuat:', logoError);
            }

            // Institution name and details (positioned next to logo, same as generateReport)
            const textStartX = marginLeft + 26; // Position text next to logo (21mm + 5mm margin)
            
            // Institution title - same as generateReport (16pt = ~5.6mm)
            doc.setFont('times', 'bold');
            doc.setFontSize(14); // Adjusted for PDF
            doc.text('SEKOLAH TINGGI TEKNOLOGI INDONESIA (STT INDONESIA)', textStartX, marginTop + 8);

            // Address and contact - same as generateReport (10pt = ~3.5mm)
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.text('Jalan Raya Cirebon Kuningan Desa Kondangsari RT/RW 04/12 Kec. Beber Kab. Cirebon - Jawa Barat', textStartX, marginTop + 14);
            doc.text('Telp: 081392637640 | E-mail: akademik@stti.ac.id', textStartX, marginTop + 18);

            // Horizontal line separator (same as generateReport - 2px thick)
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.8);
            doc.line(marginLeft, marginTop + 28, pageWidth - marginRight, marginTop + 28);

            // Report title (centered, same as generateReport - 14pt)
            doc.setFont('times', 'bold');
            doc.setFontSize(14);
            doc.text(getReportTitle(), pageWidth / 2, marginTop + 38, { align: 'center' });

            // Report date (centered, same as generateReport - 11pt)
            doc.setFont('times', 'normal');
            doc.setFontSize(11);
            doc.text(`Tanggal: ${formatDate(new Date().toISOString().split('T')[0])}`, pageWidth / 2, marginTop + 45, { align: 'center' });

            // Create table data based on report type
            let headers = [];
            let data = [];

            switch (currentReportType) {
                case 'assets':
                    headers = ['No', 'ID Aset', 'Nama Aset', 'Jenis', 'Lokasi', 'Kondisi', 'Status', 'Harga'];
                    data = assets.map((asset, index) => [
                        index + 1,
                        asset.id,
                        asset.name,
                        asset.typeName,
                        asset.location,
                        asset.condition,
                        asset.status,
                        formatCurrency(asset.price)
                    ]);
                    break;
                case 'borrowing':
                    headers = ['No', 'ID Peminjaman', 'Peminjam', 'Aset', 'Tanggal Pinjam', 'Tanggal Kembali', 'Status'];
                    data = borrowings.map((borrow, index) => [
                        index + 1,
                        borrow.id,
                        borrow.borrower,
                        borrow.asset,
                        formatDate(borrow.borrowDate),
                        borrow.actualReturnDate ? formatDate(borrow.actualReturnDate) : formatDate(borrow.returnDate),
                        borrow.status
                    ]);
                    break;
                case 'maintenance':
                    headers = ['No', 'ID Maintenance', 'Aset', 'Jenis Pemeliharaan', 'Tanggal', 'Biaya', 'Status'];
                    data = maintenanceRecords.map((maintenance, index) => [
                        index + 1,
                        maintenance.id,
                        maintenance.assetName,
                        maintenance.type,
                        formatDate(maintenance.date),
                        formatCurrency(maintenance.cost),
                        maintenance.status
                    ]);
                    break;
                case 'financial':
                    headers = ['No', 'Keterangan', 'Jumlah', 'Total'];
                    const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);
                    const maintenanceCost = maintenanceRecords.reduce((sum, m) => sum + m.cost, 0);
                    const avgAssetValue = totalValue / (assets.length || 1);

                    data = [
                        ['1', 'Total Aset', assets.length, formatCurrency(totalValue)],
                        ['2', 'Total Biaya Pemeliharaan', maintenanceRecords.length, formatCurrency(maintenanceCost)],
                        ['3', 'Rata-rata Nilai Aset', '-', formatCurrency(avgAssetValue)]
                    ];
                    break;
            }

            // Table styling (same font size as generateReport - 10pt)
            const tableConfig = {
                startY: marginTop + 52,
                headStyles: {
                    fillColor: [242, 242, 242],
                    textColor: 0,
                    fontStyle: 'bold',
                    fontSize: 9,
                    font: 'helvetica'
                },
                bodyStyles: {
                    textColor: 0,
                    fontSize: 8.5, // Same as generateReport 10pt converted to PDF
                    font: 'times'
                },
                margin: { left: marginLeft, right: marginRight },
                styles: {
                    halign: 'left',
                    valign: 'middle',
                    fontSize: 8.5
                }
            };

            // Generate table
            doc.autoTable({
                head: [headers],
                body: data,
                ...tableConfig
            });

            // Footer Section - Same as generateReport
            const finalY = doc.lastAutoTable.finalY + 30;
            if (finalY < doc.internal.pageSize.getHeight() - 40) {
                // Date and location (right aligned, same as generateReport)
                doc.setFont('times', 'normal');
                doc.setFontSize(11);
                const signatureX = pageWidth - marginRight - 60;
                doc.text(`Cirebon, ${formatDate(new Date().toISOString().split('T')[0])}`, signatureX, finalY);

                // Signature line (same width as generateReport - 200px ≈ 50mm)
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.4);
                const lineY = finalY + 23;
                doc.line(signatureX, lineY, signatureX + 50, lineY);

                // Signature name and title (same as generateReport)
                doc.setFont('times', 'bold');
                doc.text(currentUser, signatureX + 25, lineY + 7, { align: 'center' });
                doc.setFont('times', 'normal');
                doc.text(currentUserLevel, signatureX + 25, lineY + 12, { align: 'center' });
            }

            // Save the PDF
            doc.save(`laporan-${currentReportType}.pdf`);
            showToast('Laporan berhasil diunduh dalam format PDF!');

        } catch (error) {
            console.error('Error generating PDF:', error);
            showToast('Gagal membuat PDF. Silakan coba lagi.', 'error');
        }
    }).catch(error => {
        console.error('Error loading PDF libraries:', error);
        showToast('Gagal memuat library PDF. Periksa koneksi internet Anda.', 'error');
    });
}

// Fixed Excel Export Function  
function exportToExcel() {
    if (!currentReportType) {
        showToast('Pilih jenis laporan terlebih dahulu', 'error');
        return;
    }

    showToast('Memuat library Excel...', 'info');

    // Load XLSX dynamically
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js').then(() => {
        try {
            // Create workbook
            const wb = XLSX.utils.book_new();

            // Create worksheet data
            let reportData = [];

            // Add header information
            reportData.push(['SEKOLAH TINGGI TEKNOLOGI INDONESIA (STT INDONESIA)']);
            reportData.push(['Jalan Raya Cirebon Kuningan Desa Kondangsari RT/RW 04/12']);
            reportData.push(['Kec. Beber Kab. Cirebon - Jawa Barat']);
            reportData.push(['Telp: 081392637640 | E-mail: akademik@stti.ac.id']);
            reportData.push([]);
            reportData.push([getReportTitle()]);
            reportData.push([`Tanggal: ${formatDate(new Date().toISOString().split('T')[0])}`]);
            reportData.push([]);

            // Add table headers and data based on report type
            let headers = [];
            let data = [];

            switch (currentReportType) {
                case 'assets':
                    headers = ['No', 'ID Aset', 'Nama Aset', 'Jenis', 'Lokasi', 'Kondisi', 'Status', 'Harga'];
                    data = assets.map((asset, index) => [
                        index + 1,
                        asset.id,
                        asset.name,
                        asset.typeName,
                        asset.location,
                        asset.condition,
                        asset.status,
                        formatCurrency(asset.price)
                    ]);
                    break;
                case 'borrowing':
                    headers = ['No', 'ID Peminjaman', 'Peminjam', 'Aset', 'Tanggal Pinjam', 'Tanggal Kembali', 'Status'];
                    data = borrowings.map((borrow, index) => [
                        index + 1,
                        borrow.id,
                        borrow.borrower,
                        borrow.asset,
                        formatDate(borrow.borrowDate),
                        borrow.actualReturnDate ? formatDate(borrow.actualReturnDate) : formatDate(borrow.returnDate),
                        borrow.status
                    ]);
                    break;
                case 'maintenance':
                    headers = ['No', 'ID Maintenance', 'Aset', 'Jenis Pemeliharaan', 'Tanggal', 'Biaya', 'Status'];
                    data = maintenanceRecords.map((maintenance, index) => [
                        index + 1,
                        maintenance.id,
                        maintenance.assetName,
                        maintenance.type,
                        formatDate(maintenance.date),
                        formatCurrency(maintenance.cost),
                        maintenance.status
                    ]);
                    break;
                case 'financial':
                    headers = ['No', 'Keterangan', 'Jumlah', 'Total'];
                    const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);
                    const maintenanceCost = maintenanceRecords.reduce((sum, m) => sum + m.cost, 0);
                    const avgAssetValue = totalValue / (assets.length || 1);

                    data = [
                        ['1', 'Total Aset', assets.length, formatCurrency(totalValue)],
                        ['2', 'Total Biaya Pemeliharaan', maintenanceRecords.length, formatCurrency(maintenanceCost)],
                        ['3', 'Rata-rata Nilai Aset', '-', formatCurrency(avgAssetValue)]
                    ];
                    break;
            }

            // Add headers and data to report
            reportData.push(headers);
            reportData = reportData.concat(data);

            // Add signature section
            reportData.push([]);
            reportData.push([]);
            reportData.push([`Cirebon, ${formatDate(new Date().toISOString().split('T')[0])}`]);
            reportData.push([]);
            reportData.push([currentUser]);
            reportData.push([currentUserLevel]);

            // Create worksheet
            const ws = XLSX.utils.aoa_to_sheet(reportData);
            
            // Set column widths
            const range = XLSX.utils.decode_range(ws['!ref']);
            ws['!cols'] = [];
            for (let C = range.s.c; C <= range.e.c; ++C) {
                ws['!cols'].push({ wch: 15 }); // Default width
            }
            
            // Adjust specific column widths based on report type
            if (currentReportType === 'assets') {
                if (ws['!cols'][1]) ws['!cols'][1] = { wch: 20 }; // ID Aset
                if (ws['!cols'][2]) ws['!cols'][2] = { wch: 25 }; // Nama Aset
                if (ws['!cols'][7]) ws['!cols'][7] = { wch: 20 }; // Harga
            } else if (currentReportType === 'borrowing') {
                if (ws['!cols'][1]) ws['!cols'][1] = { wch: 15 }; // ID Peminjaman
                if (ws['!cols'][2]) ws['!cols'][2] = { wch: 25 }; // Peminjam
                if (ws['!cols'][3]) ws['!cols'][3] = { wch: 25 }; // Aset
                if (ws['!cols'][4]) ws['!cols'][4] = { wch: 15 }; // Tanggal Pinjam
                if (ws['!cols'][5]) ws['!cols'][5] = { wch: 15 }; // Tanggal Kembali
            }

            // Add worksheet to workbook
            XLSX.utils.book_append_sheet(wb, ws, "Laporan");

            // Save the Excel file
            XLSX.writeFile(wb, `laporan-${currentReportType}.xlsx`);
            showToast('Laporan berhasil diunduh dalam format Excel!');

        } catch (error) {
            console.error('Error generating Excel:', error);
            showToast('Gagal membuat Excel. Silakan coba lagi.', 'error');
        }
    }).catch(error => {
        console.error('Error loading Excel library:', error);
        showToast('Gagal memuat library Excel. Periksa koneksi internet Anda.', 'error');
    });
}

function printReport() {
    if (!currentReportType) return;

    const reportPreview = document.getElementById('reportPreview');
    if (!reportPreview) return;

    // Clone the report content
    const reportContent = reportPreview.querySelector('.report-container');
    if (!reportContent) return;

    const printWindow = window.open('', '_blank');
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
        case 'assets': return 'LAPORAN INVENTARIS ASET';
        case 'borrowing': return 'LAPORAN PEMINJAMAN ASET';
        case 'maintenance': return 'LAPORAN PEMELIHARAAN ASET';
        case 'financial': return 'LAPORAN KEUANGAN ASET';
        default: return 'LAPORAN';
    }
}

function createAssetReport(table) {
    // Header tabel
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['No', 'ID Aset', 'Nama Aset', 'Jenis', 'Lokasi', 'Kondisi', 'Status', 'Harga'].forEach(text => {
        const th = document.createElement('th');
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
    const tbody = document.createElement('tbody');

    assets.forEach((asset, index) => {
        const row = document.createElement('tr');

        [
            index + 1,
            asset.id,
            asset.name,
            asset.typeName,
            asset.location,
            asset.condition,
            asset.status,
            formatCurrency(asset.price)
        ].forEach(text => {
            const td = document.createElement('td');
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
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['No', 'ID Peminjaman', 'Peminjam', 'Aset', 'Tanggal Pinjam', 'Tanggal Kembali', 'Status'].forEach(text => {
        const th = document.createElement('th');
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
    const tbody = document.createElement('tbody');

    borrowings.forEach((borrow, index) => {
        const row = document.createElement('tr');

        [
            index + 1,
            borrow.id,
            borrow.borrower,
            borrow.asset,
            formatDate(borrow.borrowDate),
            borrow.actualReturnDate ? formatDate(borrow.actualReturnDate) : formatDate(borrow.returnDate),
            borrow.status
        ].forEach(text => {
            const td = document.createElement('td');
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
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['No', 'ID Maintenance', 'Aset', 'Jenis Pemeliharaan', 'Tanggal', 'Biaya', 'Status'].forEach(text => {
        const th = document.createElement('th');
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
    const tbody = document.createElement('tbody');

    maintenanceRecords.forEach((maintenance, index) => {
        const row = document.createElement('tr');

        [
            index + 1,
            maintenance.id,
            maintenance.assetName,
            maintenance.type,
            formatDate(maintenance.date),
            formatCurrency(maintenance.cost),
            maintenance.status
        ].forEach(text => {
            const td = document.createElement('td');
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
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['No', 'Keterangan', 'Jumlah', 'Total'].forEach(text => {
        const th = document.createElement('th');
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
    const tbody = document.createElement('tbody');

    // Hitung total
    const totalAssets = assets.length;
    const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);
    const maintenanceCost = maintenanceRecords.reduce((sum, m) => sum + m.cost, 0);
    const avgAssetValue = totalValue / (assets.length || 1);

    const rows = [
        ['1', 'Total Aset', totalAssets, formatCurrency(totalValue)],
        ['2', 'Total Biaya Pemeliharaan', maintenanceRecords.length, formatCurrency(maintenanceCost)],
        ['3', 'Rata-rata Nilai Aset', '-', formatCurrency(avgAssetValue)]
    ];

    rows.forEach(rowData => {
        const row = document.createElement('tr');

        rowData.forEach(cellText => {
            const td = document.createElement('td');
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

// Search Function
function searchAssets() {
    const searchField = document.getElementById('assetSearch');
    if (!searchField) return;
    
    const searchTerm = searchField.value.toLowerCase();
    const filteredAssets = assets.filter(asset =>
        asset.id.toLowerCase().includes(searchTerm) ||
        asset.name.toLowerCase().includes(searchTerm) ||
        asset.typeName.toLowerCase().includes(searchTerm) ||
        asset.brand.toLowerCase().includes(searchTerm) ||
        asset.location.toLowerCase().includes(searchTerm) ||
        asset.status.toLowerCase().includes(searchTerm)
    );

    const tableBody = document.getElementById('assetsTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    filteredAssets.forEach(asset => {
        const statusClass = asset.status === 'Tersedia' ? 'available' :
            asset.status === 'Dipinjam' ? 'borrowed' : 'maintenance';

        const conditionClass = asset.condition === 'Baik' ? 'available' :
            asset.condition === 'Rusak Ringan' ? 'borrowed' : 'maintenance';

        const canEdit = currentUserLevel === 'Admin' || currentUserLevel === 'Sarpras';

        const row = `
            <tr>
                <td><strong>${asset.id}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <img src="${asset.image}" alt="${asset.name}" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;">
                        <span>${asset.name}</span>
                    </div>
                </td>
                <td>${asset.typeName}</td>
                <td>${asset.brand}</td>
                <td>${asset.location}</td>
                <td><span class="status-badge ${statusClass}">${asset.status}</span></td>
                <td><span class="status-badge ${conditionClass}">${asset.condition}</span></td>
                <td><span class="price-display">${formatCurrency(asset.price)}</span></td>
                <td>
                    ${canEdit ? `
                        <div class="action-buttons">
                            <button class="btn btn-secondary" onclick="editAsset('${asset.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteAsset('${asset.id}')">Hapus</button>
                            <button class="btn btn-primary" onclick="viewAssetDetail('${asset.id}')">Detail</button>
                        </div>
                    ` : '<span style="color: var(--text-secondary); font-size: 0.75rem;">Hanya Lihat</span>'}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add CSS animation for spin loading
    const style = document.createElement('style');
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
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }

    // Asset form
    const assetForm = document.getElementById('assetForm');
    if (assetForm) {
        assetForm.addEventListener('submit', saveAsset);

        // Image preview for asset
        const assetImageInput = document.getElementById('assetImage');
        if (assetImageInput) {
            assetImageInput.addEventListener('change', function () {
                previewImage(this, 'assetImagePreview');
            });
        }
    }

    // Borrow form
    const borrowForm = document.getElementById('borrowForm');
    if (borrowForm) {
        borrowForm.addEventListener('submit', saveBorrow);
    }

    // Maintenance form
    const maintenanceForm = document.getElementById('maintenanceForm');
    if (maintenanceForm) {
        maintenanceForm.addEventListener('submit', saveMaintenance);
    }

    // User form
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', saveUser);

        // Image preview for user avatar
        const userAvatarInput = document.getElementById('userAvatar');
        if (userAvatarInput) {
            userAvatarInput.addEventListener('change', function () {
                previewImage(this, 'userAvatarPreview');
            });
        }
    }

    // Request form
    const requestForm = document.getElementById('requestForm');
    if (requestForm) {
        requestForm.addEventListener('submit', saveRequest);
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }

    // Asset search
    const assetSearch = document.getElementById('assetSearch');
    if (assetSearch) {
        assetSearch.addEventListener('input', searchAssets);
    }

    // Close modals when clicking outside
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // Initialize sidebar for desktop
    if (window.innerWidth >= 1024) {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        
        if (sidebar) sidebar.classList.add('active');
        if (mainContent) mainContent.classList.add('sidebar-open');
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');

        if (window.innerWidth >= 1024) {
            if (sidebar) sidebar.classList.add('active');
            if (mainContent) mainContent.classList.add('sidebar-open');
        } else {
            if (sidebar) sidebar.classList.remove('active');
            if (mainContent) mainContent.classList.remove('sidebar-open');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey) {
            switch (e.key) {
                case '1':
                    e.preventDefault();
                    showPage('dashboard');
                    break;
                case '2':
                    e.preventDefault();
                    showPage('assets');
                    break;
                case '3':
                    e.preventDefault();
                    showPage('borrowing');
                    break;
                case '4':
                    e.preventDefault();
                    showPage('maintenance');
                    break;
                case '5':
                    e.preventDefault();
                    showPage('users');
                    break;
                case 'n':
                    e.preventDefault();
                    const assetsContent = document.getElementById('assetsContent');
                    if (assetsContent && assetsContent.style.display !== 'none') {
                        openAssetModal();
                    }
                    break;
            }
        }

        // Close modal with Escape key
        if (e.key === 'Escape') {
            const activeModals = document.querySelectorAll('.modal.active');
            activeModals.forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });

    // Console information
    console.log('Sistem Inventaris Kampus v2.0.0 - FIXED');
    console.log('Developed for Sekolah Tinggi Teknologi Cirebon');
    console.log('Features:');
    console.log('- Role-based access control');
    console.log('- Asset management with barcode');
    console.log('- Borrowing system');
    console.log('- Maintenance tracking');
    console.log('- Structured asset ID format');
    console.log('- Advanced reporting with PDF/Excel export');
    console.log('- Dynamic library loading for PDF/Excel');
    console.log('Keyboard shortcuts:');
    console.log('- Ctrl+1: Dashboard');
    console.log('- Ctrl+2: Assets');
    console.log('- Ctrl+3: Borrowing');
    console.log('- Ctrl+4: Maintenance');
    console.log('- Ctrl+5: Users');
    console.log('- Ctrl+N: New Asset (when in Assets page)');
    console.log('- Esc: Close active modal');
});