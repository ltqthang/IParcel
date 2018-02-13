import {GOOGLE_MAPS_APIKEY} from "./../const";

export default function (from, to) {
  return 'https://maps.googleapis.com/maps/api/staticmap?' +
    'center=' + from.latitude + ',' + from.longitude + '&zoom=10&size=600x300' +
    '&markers=color:red%7Clabel:A%7C' + from.latitude + ',' + from.longitude +
    '&markers=color:green%7Clabel:B%7C' + to.latitude + ',' + to.longitude +
    '&key=' + GOOGLE_MAPS_APIKEY;
}