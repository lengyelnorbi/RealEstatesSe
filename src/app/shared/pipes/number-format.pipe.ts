import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let c = 0;
    let newString = "";
    let hossz = String(value).length;
    let maradek = hossz % 3;
    for(let i = 0 ; i < hossz; i++){
      if(maradek == 0){
        c++;
        if(c == 3 && i != hossz - 1){
          newString += String(value).charAt(i) + ".";
          c = 0;
        }
        else{
          newString += String(value).charAt(i);
        }
      }
      else if(maradek == 1){
        if(i == 0){
          newString += String(value).charAt(i) + ".";
        }
        else{
          c++;
          if(c == 3 && i != hossz - 1){
            newString += String(value).charAt(i) + ".";
            c = 0;
          }
          else{
            newString += String(value).charAt(i);
          }
        }
      }
      else if(maradek == 2){
        if(i == 0){
          newString += String(value).charAt(i);
        }
        else if(i == 1){
          newString += String(value).charAt(i) + ".";
        }
        else{
          c++;
          if(c == 3 && i != hossz - 1){
            newString += String(value).charAt(i) + ".";
            c = 0;
          }
          else{
            newString += String(value).charAt(i);
          }
        }
      }
    }
    return newString;
  }
}