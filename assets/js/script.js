$(function () {
    //Carrousel
    setInterval(function () {
        let taille = $('#carrousel li').outerWidth(true);
        $('#carrousel ul').animate({
            marginLeft: -taille
        }, 2000, function () {
            $(this).css({
                marginLeft: 0
            }).find('li:last').after($(this).find('li:first'));
        })
    }, 6000);

    class Article {
        constructor(nom, reference, description, prix, image, categorie, nombre) {
            this.nom = nom;
            this.reference = reference;
            this.description = description;
            this.prix = prix;
            this.image = image;
            this.categorie = categorie;
            this.nombre = nombre;
        }
    }
    let R001 = new Article('Pull de Noël', 'R001', 'Magnifique pull de noël', '24.99', 'https://images-na.ssl-images-amazon.com/images/I/81reC2OYnlL._UX385_.jpg', 'Pulls');
    let R002 = new Article('Costume du Père Noël', 'R002', 'Superbe costume de Père Noël', '34.99', 'https://cdn.deguisetoi.fr/images/rep_art/gra/236/0/236083/deguisement-complet-pere-noel-luxe-adulte_236083_4.jpg', 'Déguisements');
    let R003 = new Article('Pyjama renne', 'R003', 'Très beau pyjama', '19.99', 'https://gloimg.drlcdn.com/L/pdm-product-pic/Clothing/2017/11/11/goods-img-app/1510515212107832415.jpg', 'Pyjamas');
    let R004 = new Article('Pyjama', 'R004', 'Magnifique pyjama', '19.99', 'https://www.moa.fr/68609-thickbox_default/chaussettes-noel-cerf.jpg', 'Chaussettes');
    let R005 = new Article('Chausson du père noël', 'R005', 'Beaux chaussons', '9.99', 'https://images-na.ssl-images-amazon.com/images/I/61U8ukNKaJL._SY355_.jpg', 'Accessoires');

    var mon_array = [];
    mon_array.push(R001, R002, R003, R004, R005);
    var LongueurTableauArticle = mon_array.length;
    var x = "Accueil";

    var mon_panier = [];
    console.log(mon_panier);
    console.log(mon_array);

    $('body').on('click', 'button.add_basket', function () {
        var shop = $(this).attr('id');
        for (var i = 0; i < LongueurTableauArticle; i++) {
            if (mon_array[i].reference == shop) {
                let add_Basket = new Article(mon_array[i].nom, mon_array[i].reference, mon_array[i].description, mon_array[i].prix, mon_array[i].image, mon_array[i].categorie, mon_array[i].nombre);
                mon_panier.push(add_Basket);
                console.log(mon_panier);
            }
        }
    });

    $('.myBasket').click(function () {
        var LongueurTableauPanier = mon_panier.length;
        $('.modal-body').html('');
        for (var i = 0; i < LongueurTableauPanier; i++) {
            $('.modal-body').append(mon_panier[i].nom);
        };
    });


    $('.categorie').click(function () {
        x = $(this).attr('id');
        $('.contenu').html('');
        $('#titre_Categorie').html('Nos ' + x);
        boucle(x);
    });


    function boucle(x) {
        for (var i = 0; i < LongueurTableauArticle; i++) {
            if (mon_array[i].categorie == x) {
                $('.contenu').append(`<!-- PROMO CARD DEBUT -->
  <div class="col-11 col-md-2 card cardBorder">
   <div class="card_article_img" data-toggle="modal" data-target="#${mon_array[i].reference}"><img src="${mon_array[i].image}" alt="img_article"></div>
   <div class="card_article_text"><p class="articleTitle">${mon_array[i].nom}</p><p class="text-success">${mon_array[i].prix}€</p>
     <!-- MODALE -->
     <button type="button" class="btn btnCustomAnthony" data-toggle="modal" data-target="#${mon_array[i].reference}">Plus d'infos</button>
     <div id="${mon_array[i].reference}" class="modal fade" tabindex="-1" role="dialog"
     aria-labelledby="myHugeModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-xl">
       <div class="modal-content rounded flex-row flex-wrap justify-content-center  p-3">
         <img class="d-block img-thumbnail modalPictures" src="${mon_array[i].image}" alt="img_article">
         <div class="col-md-8">
           <p>${mon_array[i].description}</p>
           <div class="w-100 p-2"></div>
           <select class="" name="sizeSelection">
             <optgroup label="Enfants">
               <option value="childS">Enfant - S</option>
               <option value="childM">Enfant - M</option>
               <option value="childL">Enfant - L</option>
               <option value="childXL">Enfant - XL</option>
             </optgroup>
             <optgroup label="Femmes">
               <option value="womanS">Femme - S</option>
               <option value="womanM">Femme - M</option>
               <option value="womanL">Femme - L</option>
               <option value="womanXL">Femme - XL</option>
             </optgroup>
             <optgroup label="Hommes">
               <option value="manS">Homme - S</option>
               <option value="manM">Homme - M</option>
               <option value="manL">Homme - L</option>
               <option value="manXL">Homme - XL</option>
             </optgroup>
           </select>
           <div class="w-100 p-2"></div>
           <button class="btn btnCustomAnthony add_basket" id="${mon_array[i].reference}">Ajouter au panier</button>
         </div>
       </div>
     </div>
   </div>
   <!-- FIN MODALE -->
  </div>
  </div>
`);
            }
        }
    };

    $('.formDeliveryAdress, .formPayment').hide();
    $('#buttonContact').click(function (event) {
        event.preventDefault();
        var isValid = true;

        var name = $('#name').val();
        var firstName = $('#firstName').val();
        var mail = $('#mail').val();
        var phone = $('#phoneNumber').val();

        var checkName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
        var checkFirstName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
        var checkMail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        var checkPhone = /^(0|\+33)[1-9]([-. ][0-9]{2}){4}$/;

        $('form span.text-danger').remove();

        if (!checkName.test(name)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un nom valide');
            $('#name').after(span);
        }
        if (!checkFirstName.test(firstName)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un prénom valide');
            $('#firstName').after(span);
        }

        if (!checkMail.test(mail)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un mail valide');
            $('#mail').after(span);
        }
        if (!checkPhone.test(phone)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un numéro de téléphone valide');
            $('#phoneNumber').after(span);
        }

        if (!isValid) {
            event.preventDefault();
        }
        if (isValid) {
            // alert('gagné');
            $('.formDeliveryAdress').show();
            // event.preventDefault();
        }
    });
    $('#buttonDelivery').click(function (event) {
        event.preventDefault();
        var isValid = true;

        var streetNumber = $('#streetNumber').val();
        var adress = $('#adress').val();
        var zipCode = $('#zipCode').val();
        var city = $('#city').val();

        var checkStreetNumber = /^[0-9]+$/;
        var checkAdress = /^[A-Z a-z]+$/;
        var checkZipCode = /^[0-9]{5}$/;
        var checkcity = /^[A-Z][a-z]+([ -][A-Z][a-z]+)?$/;

        $('form span.text-danger').remove();

        if (!checkStreetNumber.test(streetNumber)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez un numéro de rue valide');
            $('#streetNumber').after(span);
        }
        if (!checkAdress.test(adress)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer une adresse valide');
            $('#adress').after(span);
        }

        if (!checkZipCode.test(zipCode)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer une adresse postale valide');
            $('#zipCode').after(span);
        }
        if (!checkcity.test(city)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer une ville valide');
            $('#city').after(span);
        }

        if (!isValid) {
            event.preventDefault();
        }
        if (isValid) {
            // alert('gagné');
            $('.formPayment').show();
            // event.preventDefault();
        }

    });
    $('#buttonPayment').click(function (event) {
        var isValid = true;

        var nameOnCard = $('#nameOnCard').val();
        var cardNumber = $('#cardNumber').val();
        var expiryDate = $('#expiryDate').val();
        var securityCode = $('#securityCode').val();

        var checknameOnCard = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
        var checkcardNumber = /^[0-9]{16}$/;
        var checkexpiryDate = /^[0-9]{2}\/+([0-9]){2}$/;
        var checksecurityCode = /^[0-9]{3}$/;

        $('form span.text-danger').remove();

        if (!checknameOnCard.test(nameOnCard)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez un nom valide');
            $('#nameOnCard').after(span);
        }
        if (!checkcardNumber.test(cardNumber)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un numéro de carte valide');
            $('#cardNumber').after(span);
        }

        if (!checkexpiryDate.test(expiryDate)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer une date valide');
            $('#expiryDate').after(span);
        }

        if (!checksecurityCode.test(securityCode)) {
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un cryptogramme valide');
            $('#securityCode').after(span);
        }

        if (!isValid) {
            event.preventDefault();
        }
        if (isValid) {
            alert('Confirmation de votre commande')
        }
    });
});
