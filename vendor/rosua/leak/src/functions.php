<?php

declare (strict_types=1);
namespace WindPressPackages;

use WindPressPackages\Rosua\Leak\Leaker;
if (!\function_exists('WindPressPackages\\leak')) {
    function leak(object $object) : Leaker
    {
        return new Leaker($object);
    }
}
