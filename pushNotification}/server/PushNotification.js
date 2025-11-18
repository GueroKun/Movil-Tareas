const admin = require('firebase-admin');



// Carga del archivo de credenciales del service account

const serviceAccount = require('./serviceAccountKey.json');



// Inicializar el SDK de Firebase Admin

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

});



// TODO: pega aquí el token FCM que te dio la app Flutter

const deviceToken = 'e15aB9DmRk-NJKqdp5Ie5s:APA91bFljl9iVzz-CxC9OpUb1bHEDkevLensKFJHf8wBmjQNF_cVBIqLdoCCBJeDrR5Vq6EqiBXjjjS7304mUU-kfOCfLM_VGEEUlk426VuW_lZC4-rkDck';



async function sendPush() {

  const message = {

    token: deviceToken,

    notification: {

      title: 'Hola desde Firebase Admin Christian',

      body: 'Este es un mensaje enviado con la API v1 Christian',

    },

    data: {

      origen: 'node-demo',

      tipo: 'prueba',

    },

  };



  try {

    const response = await admin.messaging().send(message);

    console.log('✅ Mensaje enviado correctamente:', response);

  } catch (error) {

    console.error('❌ Error al enviar mensaje:', error);

  }

}



sendPush();