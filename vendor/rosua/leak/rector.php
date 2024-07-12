<?php

declare (strict_types=1);
namespace WindPressPackages;

use WindPressPackages\Rector\Config\RectorConfig;
use WindPressPackages\Rector\Php74\Rector\Property\TypedPropertyRector;
use WindPressPackages\Rector\Set\ValueObject\LevelSetList;
use WindPressPackages\Rector\Set\ValueObject\SetList;
use WindPressPackages\Rector\Set\ValueObject\DowngradeLevelSetList;
return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->paths([__DIR__ . '/src']);
    // define sets of rules
    $rectorConfig->sets([SetList::NAMING, SetList::CODE_QUALITY, SetList::CODING_STYLE, LevelSetList::UP_TO_PHP_74, DowngradeLevelSetList::DOWN_TO_PHP_74]);
};
