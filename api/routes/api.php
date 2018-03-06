<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('users')->as('users.')->group(function () { // ->namespace('Users')->middleware(['auth:api'])
    Route::get('', 'UsersController@index')->name('index');
});

Route::prefix('permissions')->as('permissions.')->group(function () { // ->namespace('Users')->middleware(['auth:api'])
    Route::get('', 'PermissionsController@index')->name('index');
});

Route::prefix('departments')->as('departments.')->group(function () { // ->namespace('Users')->middleware(['auth:api'])
    Route::get('', 'DepartmentsController@index')->name('index');
});
