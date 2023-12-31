<script setup>
import topNavbar from '../src/components/topNavbar.vue'
import leftMenu from '../src/components/leftMenu.vue'
import Footer from '../src/components/footer.vue'
</script>

<template>
  <div id="app" @mousedown="startDragging" @mousemove="updateDragging" @mouseup="stopDragging" @touchstart="startTouch"
    @touchmove="updateTouch" @touchend="stopTouch">
    <div id="container">
      <div class="header">
        <span @click="toggleMenu" class="menu-toggle">☰</span>
        <img src="../src/assets/QuestCity.png" class="logo" alt="logo QuestCity">
      </div>

      <div :class="{ 'menu-open': isMenuOpen }" class="menu">
        <ul>
          <li>
            <router-link to="/"><span>Strona główna</span></router-link>
          </li>
          <li>
            <router-link to="/findgame"><span>Znajdź grę</span></router-link>
          </li>
          <li>
            <router-link to="/stats"><span>Statystyki</span></router-link>
          </li>
          <li>
            <router-link to="/login"><span>Zaloguj się!</span></router-link>
          </li>
        </ul>
      </div>
      <div class="content"> <router-view></router-view>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      startX: 0,
      currentX: 0,
      isDragging: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    startDragging(event) {
      this.startX = event.clientX;
      this.currentX = this.startX;
      this.isDragging = true;
    },
    updateDragging(event) {
      if (this.isDragging) {
        this.currentX = event.clientX;
      }
    },
    stopDragging() {
      if (this.isDragging) {
        this.isDragging = false;
        this.handleDragEnd();
      }
    },
    startTouch(event) {
      this.startX = event.touches[0].clientX;
      this.currentX = this.startX;
    },
    updateTouch(event) {
      this.currentX = event.touches[0].clientX;
    },
    stopTouch() {
      this.handleDragEnd();
    },
    handleDragEnd() {
      const deltaX = this.currentX - this.startX;

      if (deltaX > 50) {
        this.isMenuOpen = true;
      } else if (deltaX < -50) {
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
* {}

#container {
  height: 100vh;

}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;

}

#app {
  flex-direction: column;
  background-image: url(../src/assets/background.jpg);
background-size: cover;  
height: calc(100vh);
overflow-y: scroll;



}

#container {
  max-width: 700px;
  position: relative;
  left: 50%;
  transform: translate(-50%);

}

.header {
  background-color: #35424a;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top: -0.5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 10px 0;
  height: 70px;
}

.menu {
  background-color: #f9f9f9;
  width: 200px;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  user-select: none;
  position: sticky;
  top: 70px;
  /* Wysokość nagłówka */
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
}
.logo{
  height: 45px;
  margin-right: 20px;
}

.menu-open {
  transform: translateX(0);
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu li {
  padding: 10px;
}

.menu li :hover {
  color: black;
  font-weight: 500;

}

.menu a {
  color: #09243a;
  text-decoration: none;
}

.menu-toggle {
  font-size: 24px;
  cursor: pointer;
}

.content {
    flex: 1;
    padding: 20px;
    position: relative;
    top: -150px;
    border-radius: 10px;
  }



  @media only screen and (max-width:700px){
  .content{
    padding: 0;
    border-radius: 0;
  }
  .content-bg{
    border-radius: 0;
  }
}

</style>
