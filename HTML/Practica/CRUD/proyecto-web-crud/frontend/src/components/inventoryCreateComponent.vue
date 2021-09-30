<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/inventory">
                        Inventario
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create-product">
                        Ingresar producto
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                        Editar Producto
                        </router-link>
                    </li>
                </ul>
            </div>
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Ingreso de productos</h1>
            </div>

            <!-- inicio del formulario -->
                <div class="col-md-7 col-lg-8">
                  <form class="needs-validation" novalidate>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="product" class="form-label">Producto</label>
                        <input type="text" class="form-control" id="product" placeholder="" value="" required>

                      </div>
                    
                      <div class="col-sm-6">
                        <label for="unit" class="form-label">Unidades</label>
                        <input type="text" class="form-control" id="unit" placeholder="" value="" required>

                      </div>
            

                      <div class="col-12">
                        <label for="email" class="form-label">Email </label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com">

                      </div>
          
                      <div class="col-12">
                        <label for="address" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="address" placeholder="Cra 25 #25-25" required>

                      </div>
          
                    <div>
                      <div class="col-md-5">
                        <label for="country" class="form-label">Departamento</label>
                        <select class="form-select" id="country" required>
                          <option value="">Elige...</option>
                          <option>Valle del Cauca</option>
                        </select>

                      </div>
          
                      <div class="col-md-4">
                        <label for="state" class="form-label">Ciudad</label>
                        <select class="form-select" id="state" required>
                          <option value="">Elige...</option>
                          <option>Andalucia</option>
                          <option>Cerrito</option>
                          <option>Tulua</option>
                        </select>

                      </div>
          
                    </div>
                  </div>
          
                    <hr class="my-4">
          
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Ingresar Producto</button>
                  </form>
                </div>
            <!-- fin del formulario -->

            <h2>Lista de Productos</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">producto</th>
                        <th scope="col">unidades</th>
                        <th scope="col">P.compra</th>
                        <th scope="col">P.venta</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                            <td>01</td>
                            <td>dogchaw 350g</td>
                            <td>10</td>
                            <td>8000</td>
                            <td>10000</td>
                            </tr>
                            <tr>
                            <td>02</td>
                            <td>dogchaw 500g</td>
                            <td>20</td>
                            <td>12000</td>
                            <td>14000</td>
                            </tr>
                        </tbody>
                </table>
            </div>
            </main>
        </div>
    </div>
</div>    
</template>


<script>
    export default {
      name: 'inventory',
      props: {
        msg: String
      }
    }
    </script>