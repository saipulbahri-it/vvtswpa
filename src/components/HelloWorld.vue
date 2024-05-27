<script setup lang="ts">
import { ref } from "vue";
import { BButton } from '../@core/components'

// import { BButton } from 'bootstrap-vue-3';

defineProps<{ msg: string }>();

const count = ref(0);

const modalShow = ref(false);

</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="card">
      <div class="card-body">
        <div class="mb-3">
          <b-button @click="modalShow = !modalShow">
            Open Modal
          </b-button>
          <!-- <b-modal v-model="modalShow" class="modal-blur" centered title="Tambah Pengguna">
            <div class="modal-form">
              <div class="row mb-3 align-items-end">
                <div class="col-auto">
                  <a href="#" class="avatar avatar-upload rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 5l0 14"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                    <span class="avatar-upload-text">Foto</span>
                  </a>
                </div>
                <div class="col">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Pick your team color</label>
                <div class="row g-2">
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="dark" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-dark"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput form-colorinput-light">
                      <input name="color" type="radio" value="white" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-white"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="blue" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-blue"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="azure" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-azure"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="indigo" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-indigo"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="purple" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-purple"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="pink" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-pink"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="red" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-red"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="orange" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-orange"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="yellow" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-yellow"></span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <label class="form-colorinput">
                      <input name="color" type="radio" value="lime" class="form-colorinput-input">
                      <span class="form-colorinput-color bg-lime"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label class="form-label">Additional info</label>
                <textarea class="form-control"></textarea>
              </div>
            </div>
          </b-modal> -->
        </div>
        <div class="mb-3">
          <button type="button" class="btn" @click="count++">
            count is {{ count }}
          </button>
        </div>
        <div class="mb-3">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0 gap-2" data-bs-toggle="dropdown"
            aria-label="Open user menu">
            <span class="avatar avatar-sm" style="
                background-image: url(https://preview.tabler.io/static/avatars/000m.jpg);
              ">
            </span>
            <div class="d-none d-xl-block">
              <div>Paweł Kuna</div>
              <div class="mt-1 small text-secondary">UI Designer</div>
            </div>
          </a>
        </div>
        <p>
          Install
          <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
          in your IDE for a better DX
        </p>
        <p class="read-the-docs">
          Click on the Vite and Vue logos to learn more
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
