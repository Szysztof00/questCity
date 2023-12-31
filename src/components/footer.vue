<template>
  <footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
      <div class="d-flex align-items-center justify-content-between small">
        <div class="text-muted">Wszelkie prawa zastrzeżone &copy; Krzysztof Krawczyk - QuestCity 2024 </div>
        <div>
        </div>
      </div>
    </div>
  </footer>


</template>


<style scoped>


.text-muted{
width: 100%;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

}

footer{
  margin-top:20px !important;
  position: sticky;
  bottom:0;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  user-select: none;
  z-index: 10000;



}

@media only screen and (max-width:700px){
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;

  }
}
  



</style>