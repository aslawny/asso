<template>
  <div class="home">
    <div class="container">
      <br />" Crois que tu y arriveras et tu seras à mi-chemin." &nbsp;&nbsp; Théodore
      Roosevelt<br />
      <div class="home-img">
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1"
              >Votre Email (Pour vous recontacter))</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Aide Souhaitée</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Reconversion</option>
              <option>Coaching</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Domaine</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Commercial</option>
              <option>Programmation</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Dites nous en plus :</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Contactez Moi</button>
        </form>
      </div>
    </div>
  </div>
</template>
