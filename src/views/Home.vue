<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Iniciar Sesión</h1>
                        <div class="text-center mt-4">
                          <v-avatar size="68px" >
                            <img src="https://image.flaticon.com/icons/png/512/1869/1869354.png">
                          </v-avatar>

                          <v-avatar size="68px" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7DN2LCWRpebScAFFD1TH2fTuxfx6J9dnfhOtW2OSfPDYa1nnhqyUer_0NmxxjNQEXfU&usqp=CAU">
                          </v-avatar>
                          
                          <v-avatar size="68px"  >
                            <img src="https://i.pinimg.com/originals/e4/47/c2/e447c2346721248a29b8003706d507b8.png">
                          </v-avatar>
                        </div>
                        <br>
                        <h4 class="text-center">Inicia sesión con tu correo institucional</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">¿Olvidaste tu contrasena?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark>Iniciar Sesión</v-btn>
                      </div>
                      <br>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">¡Hola lince!</h1>
                        <h5
                          class="text-center"
                        >Esta aplicación nos ayudará a mantener una comunidad estudiantil segura</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
   </v-app> 
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>