
    $('#user').on('keyup', function(){

        var text = $('#user').val();
         $('.usuario').html(text)
    })


    $('#foto').on('change', function(e){


        let reader = new FileReader();
    
        
        reader.readAsDataURL(e.target.files[0]);
    
       
        reader.onload = function() {
            let preview = document.getElementById('fotito'),
                image = document.createElement('img');
    
            image.src = reader.result;
    
            preview.innerHTML = '';
            preview.append(image);
        };


    })


    $("#reset").click(function(){

        var x = $('#x').val()
        var y = $('#y').val()

        $("#fotito").offset({top: x, left: y});
    });

