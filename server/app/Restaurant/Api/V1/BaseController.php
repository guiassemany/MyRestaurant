<?php

namespace Restaurant\Api\V1;

use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

class BaseController extends Controller
{
    use Helpers;

    protected function success($message)
    {
        return $this->response->array(['success' => true, 'message' => $message]);
    }

    protected function error($message)
    {
        return $this->response->array(['error' => true, 'message' => $message]);
    }

}