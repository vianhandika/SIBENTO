<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/admin', 'AdminViewController@index');
// Route::get('/admin/{any}', function(){
//     return view('index');
// })->where('any', '([A-z\d-\/_.]+)?');
Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '[\/\w\.-]*');

