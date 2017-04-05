/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function botev() {
    switch (document.getElementById('botev').value) {
        
        case 'maice':
            window.open("pages/maice.html");
            break;
            
        case 'brata':
            window.open("pages/brata.html");
            break;
            
        case 'elegiq':
            window.open("pages/elegiq.html");
            break;
            
        case 'borba':
            window.open("pages/borba.html");
            break;
            
        case 'libe':
            window.open("pages/libe.html");
            break;
            
        case 'proshtavane':
            window.open("pages/proshtavane.html");
            break;
            
        case 'dimityr':
            window.open("pages/dimityr.html");
            break;
            
        case 'molitva':
            window.open("pages/molitva.html");
            break;
            
        case 'obesvaneto':
            window.open("pages/obesvaneto.html");
            break;
    }
}

function vazov() {
    switch (document.getElementById('vazov').value) {
        
        case 'ezik':
            window.open("pages/ezik.html");
            break;
            
        case 'otechestvo':
            window.open("pages/brata.html");
            break;
            
        case 'manastir':
            window.open("pages/elegiq.html");
            break;
            
        case 'elate':
            window.open("pages/borba.html");
            break;
            
        case 'linee':
            window.open("pages/libe.html");
            break;
            
        case 'levski':
            window.open("pages/proshtavane.html");
            break;
            
        case 'paisii':
            window.open("pages/dimityr.html");
            break;
            
        case 'kocho':
            window.open("pages/molitva.html");
            break;
            
        case 'opylchencite':
            window.open("pages/obesvaneto.html");
            break;
            
            case 'paisii':
            window.open("pages/dimityr.html");
            break;
            
        case 'kocho':
            window.open("pages/molitva.html");
            break;
            
        case 'opylchencite':
            window.open("pages/obesvaneto.html");
            break;
    }
}

function vapcarov() {
    switch (document.getElementById('vapcarov').value) {
        
        case 'vqra':
            window.open("pages/vqra.html");
            break;
            
        case 'pismo':
            window.open("pages/pismo.html");
            break;
            
        case 'pesen':
            window.open("pages/pesen.html");
            break;
            
        case 'syn':
            window.open("pages/syn.html");
            break;
            
        case 'istoriq':
            window.open("pages/istoriq.html");
            break;
            
        case 'zavod':
            window.open("pages/zavod.html");
            break;
            
        case 'kino':
            window.open("pages/kino.html");
            break;
            
        case 'proshtalno':
            window.open("pages/proshtalno.html");
            break;
            
        case 'jestoka':
            window.open("pages/jestoka.html");
            break;
    }
}

function dimov() {
    switch (document.getElementById('dimov').value) {
        
        case 'tutun':
            window.open("pages/tutun.html");
            break;
    }
}

function talev() {
    switch (document.getElementById('talev').value) {
        
        case 'svetilnik':
            window.open("pages/svetilnik.html");
            break;
    }
}

function milev() {
    switch (document.getElementById('milev').value) {
        
        case 'septemvri':
            window.open("pages/septemvri.html");
            break;
    }
}

function bagrqna() {
    switch (document.getElementById('bagrqna').value) {
        
        case 'kukuvica':
            window.open("pages/kukuvica.html");
            break;
            
        case 'stihii':
            window.open("pages/stihii.html");
            break;
            
        case 'potomka':
            window.open("pages/potomka.html");
            break;
            
        case 'vechnata':
            window.open("pages/vechnata.html");
            break;
    }
}

function konstantinov() {
    switch (document.getElementById('konstantinov').value) {
        
        case 'razni':
            window.open("pages/razni.html");
            break;
            
        case 'bai':
            window.open("pages/bai.html");
            break;
    }
}

function slaveikov() {
    switch (document.getElementById('slaveikov').value) {
        
        case 'cis':
            window.open("pages/cis.html");
            break;
            
        case 'poleni':
            window.open("pages/poleni.html");
            break;
            
        case 'ezeroto':
            window.open("pages/ezeroto.html");
            break;
            
        case 'samoten':
            window.open("pages/samoten.html");
            break;
            
        case 'ralica':
            window.open("pages/ralica.html");
            break;
    }
}

function qvorov() {
    switch (document.getElementById('qvorov').value) {
        
        case 'gradushka':
            window.open("pages/gradushka.html");
            break;
            
        case 'zatochenici':
            window.open("pages/zatochenici.html");
            break;
            
        case 'bqlo':
            window.open("pages/bqlo.html");
            break;
            
        case 'ochi':
            window.open("pages/ochi.html");
            break;
            
        case 'ston':
            window.open("pages/ston.html");
            break;
            
        case 'dushi':
            window.open("pages/dushi.html");
            break;
            
        case 'senki':
            window.open("pages/senki.html");
            break;
            
        case 'pesenta':
            window.open("pages/pesenta.html");
            break;
            
        case 'maska':
            window.open("pages/maska.html");
            break;
    }
}

function debelqnov() {
    switch (document.getElementById('debelqnov').value) {
        
        case 'cherna':
            window.open("pages/cherna.html");
            break;
            
        case 'plovdiv':
            window.open("pages/plovdiv.html");
            break;
            
        case 'zavyrnesh':
            window.open("pages/zavyrnesh.html");
            break;
            
        case 'pomnish':
            window.open("pages/pomnish.html");
            break;
            
        case 'gradyt':
            window.open("pages/gradyt.html");
            break;
            
        case 'mig':
            window.open("pages/mig.html");
            break;
            
        case 'ubit':
            window.open("pages/ubit.html");
            break;
            
        case 'sirotna':
            window.open("pages/sirotna.html");
            break;
            
        case 'tiha':
            window.open("pages/tiha.html");
            break;
    }
}

function iovkov() {
    switch (document.getElementById('iovkov').value) {
        
        case 'koleletata':
            window.open("pages/koleletata.html");
            break;
            
        case 'radost':
            window.open("pages/radost.html");
            break;
            
        case 'shibil':
            window.open("pages/shibil.html");
            break;
            
        case 'chumavoto':
            window.open("pages/chumavoto.html");
            break;
            
        case 'indje':
            window.open("pages/indje.html");
            break;
            
        case 'albena':
            window.open("pages/albena.html");
            break;
            
        case 'drugoselec':
            window.open("pages/drugoselec.html");
            break;
            
        case 'serafim':
            window.open("pages/serafim.html");
            break;
    }
}

function dalchev() {
    switch (document.getElementById('dalchev').value) {
        
        case 'prozorec':
            window.open("pages/prozorec.html");
            break;
            
        case 'bolnica':
            window.open("pages/bolnica.html");
            break;
            
        case 'staqta':
            window.open("pages/staqta.html");
            break;
            
        case 'kyshtata':
            window.open("pages/kyshtata.html");
            break;
            
        case 'povest':
            window.open("pages/povest.html");
            break;
            
        case 'knigite':
            window.open("pages/knigite.html");
            break;
            
        case 'kamyk':
            window.open("pages/kamyk.html");
            break;
            
        case 'dqvolsko':
            window.open("pages/dqvolsko.html");
            break;
    }
}

function pelin() {
    switch (document.getElementById('pelin').value) {
        
        case 'melnica':
            window.open("pages/melnica.html");
            break;
            
        case 'kosachi':
            window.open("pages/kosachi.html");
            break;
            
        case 'zadushnica':
            window.open("pages/zadushnica.html");
            break;
            
        case 'mechtateli':
            window.open("pages/mechtateli.html");
            break;
            
        case 'onq':
            window.open("pages/onq.html");
            break;
            
        case 'andreshko':
            window.open("pages/andreshko.html");
            break;
            
        case 'chorba':
            window.open("pages/chorba.html");
            break;
            
        case 'kambani':
            window.open("pages/kambani.html");
            break;
            
        case 'geracite':
            window.open("pages/geracite.html");
            break;
    }
}

function smirnenski() {
    switch (document.getElementById('smirnenski').value) {
        
        case 'den':
            window.open("pages/den.html");
            break;
            
        case 'nii':
            window.open("pages/nii.html");
            break;
            
        case 'iohan':
            window.open("pages/iohan.html");
            break;
            
        case 'unosha':
            window.open("pages/unosha.html");
            break;
            
        case 'muzikant':
            window.open("pages/muzikant.html");
            break;
            
        case 'cvetarka':
            window.open("pages/cvetarka.html");
            break;
            
        case 'vecheri':
            window.open("pages/vecheri.html");
            break;
    }
}