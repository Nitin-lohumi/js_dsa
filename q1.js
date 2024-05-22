class fact{
  f1(i){
    if(i==1)
    {
        return 1;

    }
        result =f1(i-1)*i;
        return result;
  }
}
fact =new fact();
fact.f1(3);