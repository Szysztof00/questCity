<template>
  <div class="content-bg">
    <h1 class="mt-4">ZNAJDŹ GRĘ MIEJSKĄ</h1>
    <h3>(tylko publiczne)</h3>
    <div class="text-center">
      <!-- Dodane inputy do wyszukiwania po różnych kolumnach -->
      <div class="input-group mt-3">
        <input type="text" v-model="searchTermId" class="form-control" placeholder="Szukaj po ID...">
        <input type="text" v-model="searchTermTitle" class="form-control" placeholder="Szukaj po nazwie...">
        <select v-model="searchTermActivity" class="form-control">
          <option value="">Wszystkie</option>
          <option value="active">Aktywne</option>
          <option value="inactive">Nieaktywne</option>
        </select>
        <div class="input-group-append">
          <button @click="resetSearch" class="btn btn-outline-secondary" type="button">Resetuj</button>
        </div>
      </div>

      <table id="dtBasicExample" class="table table-striped table-bordered table-sm mt-3" cellspacing="0" width="100%">
        <thead class="thead-dark">
          <tr>
            <th class="th-sm">ID</th>
            <th class="th-sm">Nazwa gry</th>
            <th class="th-sm">Aktywność</th>
            <th class="th-sm">Akcje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, index) in paginatedGames" :key="game.id">
            <td>{{ game.id }}</td>
            <td>{{ game.title }}</td>
            <td v-if="game.active">Aktywna</td>
            <td v-else>Nieaktywna</td>
            <td>
              <button @click="joinGame(game.id)" class="btn btn-sm btn-success">Dołącz</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Nazwa gry</th>
            <th>Aktywność</th>
            <th>Akcje</th>
          </tr>
        </tfoot>
      </table>

      <nav v-if="totalPages > 1">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <a class="page-link" @click="changePage(currentPage - 1)">Poprzednia</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
            <a class="page-link" @click="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <a class="page-link" @click="changePage(currentPage + 1)">Następna</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
      { id: 1, title: 'Gra 1', active: true },
        { id: 2, title: 'Gra 2', active: true },
        { id: 3, title: 'Gra 3', active: false },
        { id: 4, title: 'Gra 1', active: true },
        { id: 5, title: 'Gra 2', active: true },
        { id: 6, title: 'Gra 3', active: false },
        { id: 7, title: 'Gra 1', active: true },
        { id: 8, title: 'Gra 2', active: true },
        { id: 9, title: 'Gra 3', active: false },
        { id: 10, title: 'Gra 1', active: true },
        { id: 11, title: 'Gra 2', active: true },
        { id: 12, title: 'Gra 3', active: false },
        { id: 13, title: 'Gra 1', active: true },
        { id: 14, title: 'Gra 2', active: true },
        { id: 15, title: 'Gra 3', active: false },
        { id: 16, title: 'Gra 1', active: true },
        { id: 17, title: 'Gra 2', active: true },
        { id: 18, title: 'Gra 3', active: false },
      ],
      searchTermId: '',
      searchTermTitle: '',
      searchTermActivity: '',
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => {
        const matchId = game.id.toString().includes(this.searchTermId.toLowerCase());
        const matchTitle = game.title.toLowerCase().includes(this.searchTermTitle.toLowerCase());
        const matchActivity =
          this.searchTermActivity === ''
            ? true
            : this.searchTermActivity === 'active'
            ? game.active
            : !game.active;

        return matchId && matchTitle && matchActivity;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredGames.length / this.itemsPerPage);
    },
    paginatedGames() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredGames.slice(start, end);
    },
  },
  methods: {
    resetSearch() {
      this.searchTermId = '';
      this.searchTermTitle = '';
      this.searchTermActivity = '';
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    joinGame(gameId) {
      // Logika dołączania do gry
      // Tutaj możesz dodać kod do obsługi dołączania użytkownika do gry
    },
  },
};
</script>

<style scoped>
  .game-modal-popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 20px;
  }

  .mt-4 {
    width: 100%;
    text-align: center;
    color: #495057;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  a {
    cursor: pointer;
  }

  h3{
    text-align: center;
  }

 
</style>
