// 監聽視窗大小變化
window.addEventListener('resize', function() {
    const nav = document.querySelector('.nav');
    document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');
});

// 初始化
window.dispatchEvent(new Event('resize'));

// 頁面切換功能
function switchPage(pageId) {
    // 隱藏所有頁面
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    
    // 顯示選中的頁面
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        
        // 滾動到頁面頂部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // 更新導航項目狀態
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + pageId) {
            link.classList.add('active');
        }
    });
    
    // 更新URL
    history.pushState(null, null, '#' + pageId);
}

// DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有導航連結
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 為每個連結添加點擊事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            switchPage(pageId);
            
            // 在手機模式下，點擊導航項後收起選單
            if (window.innerWidth <= 768) {
                const navMenu = document.getElementById('nav-links');
                if (navMenu.classList.contains('active')) {
                    document.getElementById('menu-toggle').click();
                }
            }
        });
    });
    
    // 頁面載入時檢查URL片段
    const pageId = window.location.hash.substring(1) || 'home';
    switchPage(pageId);
    
    // 設置漢堡選單
    setupMobileMenu();
});

// 展開/收合功能
function toggleAnnouncements(button) {
    const announcements = document.querySelectorAll('#announcements .announcement.hidden-item');
    toggleItems(announcements, button);
}

function togglePublications(button) {
    const publications = button.parentElement.querySelectorAll('.publication-item.hidden-item');
    toggleItems(publications, button);
}

function toggleAllPublications(button) {
    const publications = document.querySelectorAll('#publications .publication-year-section.hidden-item');
    toggleItems(publications, button);
}

function toggleCourses(button) {
    const coursesHidden = document.querySelector('#teaching .hidden-item');
    if (coursesHidden) {
        coursesHidden.classList.toggle('show');
        updateButtonText(button);
    }
}

function toggleAlumni(button) {
    const alumni = document.querySelectorAll('.alumni-section');
    toggleItems(alumni, button, 'Show Alumni', 'Hide Alumni');
}

// 通用切換函數
function toggleItems(items, button, showText = 'Show More', hideText = 'Show Less') {
    if (items.length === 0) return;
    
    const isShowing = items[0].classList.contains('show');
    items.forEach(item => item.classList.toggle('show'));
    
    if (button) {
        button.textContent = isShowing ? showText : hideText;
    }
}

// 更新按鈕文字
function updateButtonText(button) {
    if (!button) return;
    button.textContent = button.textContent === 'Show More' ? 'Show Less' : 'Show More';
}

// 篩選論文
function filterPublications(type) {
    // 更新按鈕狀態
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // 過濾論文
    const publications = document.querySelectorAll('.publication-entry');
    publications.forEach(pub => {
        if (type === 'all' || pub.dataset.type === type) {
            pub.style.display = 'block';
        } else {
            pub.style.display = 'none';
        }
    });
}

// 漢堡選單功能設置 - 改為折疊式導航
function setupMobileMenu() {
    // 獲取元素
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // 確保初始狀態
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
    
    // 切換選單顯示
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // 直接設置顯示狀態
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    }
    
    // 點擊漢堡選單按鈕切換選單
    menuToggle.addEventListener('click', toggleMenu);
    
    // 窗口大小變化時調整
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // 大螢幕時導航永遠顯示
            navLinks.style.display = 'flex';
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        } else {
            // 小螢幕時檢查狀態
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
        }
    });
    
    // 初始執行一次以設置正確的初始狀態
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
}
