# �迭

������ �����͸� ��Ƽ� �����ϱ� ���ؼ� ����ϴ� ������ Ÿ��

- ## ����

```java
//������ Ÿ��[]  ���� �̸� = {������};
//1.
String[] weeks = {"��", "ȭ", "��", "��", "��", "��", "��"};

//2.
String[] weeks = new String[7];
weeks[0] = "��";
weeks[1] = "ȭ";
weeks[2] = "��";
weeks[3] = "��";
weeks[4] = "��";
weeks[5] = "��";
weeks[6] = "��";
```

- ## length
  �迭�� ó�� ������ �� ������ �迭�� ũ��

```java
String[] weeks = {"��", "ȭ", "��", "��", "��", "��", "��"};

System.out.println(weeks.length);

for(int i = 0; i < weeks.length; i++){
    System.out.println(weeks[i]);
}
```
