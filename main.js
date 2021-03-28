
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
        var canvas_t = 0
        var canvas_b = 700
        var canvas_l = 0
        var canvas_r = 700
       
        if(x > canvas_t && x < canvas_b && x > canvas_l && x < canvas_r && y > canvas_t && y < canvas_b && y > canvas_l && y < canvas_r)
        {
            $("#fotito").offset({top: x, left: y});
        }
        else{alert("fuera de rango")}

       
        
    });

