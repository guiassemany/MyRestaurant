<?php

namespace Restaurant\Api\V1;

use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseControllera;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class BaseController extends Controller
{
    use Helpers, AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function success($message)
    {
        return $this->response->array(['success' => true, 'message' => $message]);
    }

    protected function error($message)
    {
        return $this->response->array(['error' => true, 'message' => $message]);
    }

}
