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
                            <th scope="col">Fecha de vencimiento</th>
                            <th scope="col">imagen</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                <td>01</td>
                                <td>dogchaw 350g</td>
                                <td>10</td>
                                <td>8000</td>
                                <td>10000</td>
                                <td>15-09-21</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>02</td>
                                <td>dogchaw 500g</td>
                                <td>20</td>
                                <td>12000</td>
                                <td>14000</td>
                                <td>25-07-19</td>
                                <td></td>
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