<?php

namespace Drupal\wildcat_media_gallery\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

/**
 * Validates the WildcatMediaGalleryBundle constraint.
 */
class WildcatMediaGalleryBundleConstraintValidator extends ConstraintValidator {

  /**
   * {@inheritdoc}
   */
  public function validate($value, Constraint $constraint) {
    if (!isset($value)) {
      return;
    }
    if ($value->hasField($constraint->sourceFieldName)) {
      $galleryItems = $value->get($constraint->sourceFieldName);
      foreach ($galleryItems as $item) {
        if ($item->entity->getType()->getPluginId() == "slideshow") {
          $this->context->addViolation($constraint->message);
        }
      }
    }
  }

}
