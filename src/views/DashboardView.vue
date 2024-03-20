<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<nav class="navbar navbar-expand-lg navbar-light">
  <router-link class="nav-item nav-link me-4 active" to="/">Home </router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link me-4" to="/admin/products">admin/products</router-link>
      <router-link class="nav-item nav-link me-4" to="/products">products</router-link>
      <router-link class="nav-item nav-link me-4" to="/product?id=1">product?id=1</router-link>
      <router-link class="nav-item nav-link me-4" to="/checkout">checkout</router-link>
    </div>
  </div>
</nav>
  <router-view></router-view>
  <div class="bg-light py-4">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
        </ul>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
