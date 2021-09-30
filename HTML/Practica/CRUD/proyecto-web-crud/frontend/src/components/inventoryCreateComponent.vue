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
                        <input type="text" class="form-control" id="unit" placeholder="0" value="" required>

                      </div>
            

                      <div class="col-6">
                        <label for="Pcompra" class="form-label">Precio de Compra </label>
                        <input type="number" class="form-control" id="Pcompra" placeholder="0" required>

                      </div>
          
                      <div class="col-6">
                        <label for="Pventa" class="form-label">Precio de Venta</label>
                        <input type="number" class="form-control" id="Pventa" placeholder="0" required>

                      </div>

                      <div class="col-12">
                        <label for="detalle" class="form-label">Detalle</label>
                      <input type="text" class="form-control" id="detalle" placeholder="0" required>

                      </div>
          
                      <div>
                        <div class="col-md-5">
                          <label for="categoria" class="form-label">Categoria</label>
                          <select class="form-select" id="categoria" required>
                            <option value="">Elige...</option>
                            <option>Avicultura</option>
                            <option>Equinos</option>
                            <option>Ganaderia</option>
                            <option>Mascotas</option>
                            <option>Porcicultura</option>
                          </select>

                        </div>          
                      </div>
                  </div>
          
                    <hr class="my-4">
          
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Ingresar Producto</button>
                    <hr class="my-4">
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