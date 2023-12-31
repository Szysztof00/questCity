<template>
  <!-- Struktura główna komponentu Vue -->
  <div id="app" @mousedown="startDragging" @mousemove="updateDragging" @mouseup="stopDragging" @touchstart="startTouch" @touchmove="updateTouch" @touchend="stopTouch">
    <div id="container"> <!-- Nagłówek strony -->
      <div class="header">
        <!-- Przycisk do otwierania/zamykania menu -->
        <span @click="toggleMenu" class="menu-toggle">☰</span>
        <!-- Tytuł strony -->
      
      </div>

      <!-- Menu nawigacyjne -->
      <div :class="{ 'menu-open': isMenuOpen }" class="menu">
        <ul>
          <!-- Pozycje w menu -->
          <li><a href="#">Strona główna</a></li>
          <li><a href="#">O nas</a></li>
          <li><a href="#">Usługi</a></li>
          <li><a href="#">Kontakt</a></li>
          
        </ul>
      </div>

      <!-- Zawartość strony -->
      <div class="content">
        dsaddsa
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Stan otwarcia/zamknięcia menu
      isMenuOpen: false,
      // Początkowa pozycja X podczas przeciągania (mousedown/touchstart)
      startX: 0,
      // Aktualna pozycja X podczas przeciągania
      currentX: 0,
      // Flaga wskazująca, czy trwa przeciąganie
      isDragging: false,
    };
  },
  methods: {
    // Metoda do przełączania stanu otwarcia/zamknięcia menu
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Rozpoczęcie przeciągania myszą
    startDragging(event) {
      this.startX = event.clientX;
      this.currentX = this.startX;
      this.isDragging = true;
    },
    // Aktualizacja pozycji X podczas przeciągania myszą
    updateDragging(event) {
      if (this.isDragging) {
        this.currentX = event.clientX;
      }
    },
    // Zakończenie przeciągania po puszczeniu myszy
    stopDragging() {
      if (this.isDragging) {
        this.isDragging = false;
        this.handleDragEnd();
      }
    },
    // Rozpoczęcie przeciągania na ekranie dotykowym
    startTouch(event) {
      this.startX = event.touches[0].clientX;
      this.currentX = this.startX;
    },
    // Aktualizacja pozycji X podczas przeciągania na ekranie dotykowym
    updateTouch(event) {
      this.currentX = event.touches[0].clientX;
    },
    // Zakończenie przeciągania na ekranie dotykowym
    stopTouch() {
      this.handleDragEnd();
    },
    // Obsługa zakończenia przeciągania (mysz/touch)
    handleDragEnd() {
      const deltaX = this.currentX - this.startX;

      // Otwarcie menu po przeciągnięciu w prawo
      if (deltaX > 50) {
        this.isMenuOpen = true;
      }
      // Zamknięcie menu po przeciągnięciu w lewo
      else if (deltaX < -50) {
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Stylizacja komponentu */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
}

#container {
  max-width: 700px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

/* Stylizacja nagłówka */
.header {
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top:0
}

/* Stylizacja menu */
.menu {
  background-color: #09243a;
  width: 200px;
  transform: translateY(-101%); 
  /* Zmiana transformacji na przesunięcie w prawo */
  transition: transform 0.3s ease;
  user-select: none;
  position: fixed; /* Zmiana na pozycję stałą */
  z-index: 1;
  
}

/* Animacja otwierania/zamykania menu */
.menu-open {
  transform: translateX(0);
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  border-bottom: 1px solid black
}

.menu a {
  color:white;
  text-decoration: none;
}

.menu-toggle {
  font-size: 24px;
  cursor: pointer;
}

/* Stylizacja zawartości */
.content {
  flex: 1;
  padding: 20px;
}
</style>
