<?php

    require_once('koneksi.php');

    if(isset($_POST['btn-submit']))
    {
        $name = mysqli_real_escape_string($con, $_POST['name']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $phone = mysqli_real_escape_string($con, $_POST['no_hp']);
        $age = mysqli_real_escape_string($con, $_POST['usia']);
        $ins = mysqli_real_escape_string($con, $_POST['instansi']);
        $ig = mysqli_real_escape_string($con, $_POST['instagram']);
      
      	echo 'Pengisian berhasil. ';

        if(empty($name) || empty($email) || empty($phone)  || empty($age) || empty($ins) || empty($ig))
        {
            echo 'Tolong isikan semua data dengan benar';
        }
        else
        {
            $sql = "insert into iyts_test (nama,email,no_hp,usia,instansi,instagram) values('$name','$email','$phone','$age', '$ins', '$ig')";
            $result = mysqli_query($con, $sql);

            if($result)
            {
                echo 'Data anda sudah terkirim';
            }
            else{
                echo'Tapi, maaf data belum terkirim. Silahkan hubungi admin';
            }
        }
    }


?>