<?php

namespace WindPressPackages;

use WindPressPackages\Symplify\EasyCodingStandard\Config\ECSConfig;
use WindPressPackages\Symplify\EasyCodingStandard\ValueObject\Set\SetList;
return static function (ECSConfig $ecsConfig) : void {
    $ecsConfig->paths([__DIR__ . '/src']);
    $ecsConfig->sets([SetList::CLEAN_CODE, SetList::COMMON, SetList::PSR_12]);
};
