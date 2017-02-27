<?php

namespace Drupal\wildcat_media_gallery\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;

/**
 * Check that there is no Gallery type item in slideshow items.
 *
 * @Constraint(
 *   id = "WildcatMediaGalleryBundle",
 *   label = @Translation("Wildcat Gallery media bundle", context = "Validation"),
 * )
 */
class WildcatMediaGalleryBundleConstraint extends Constraint {

  /**
   * Name of the source field for wildcat_gallery bundle.
   *
   * @var string
   */
  public $sourceFieldName;

  /**
   * The default violation message.
   *
   * @var string
   */
  public $message = 'Gallery cannot contain media item of type Gallery.';

}
