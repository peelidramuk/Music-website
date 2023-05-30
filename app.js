const music = new Audio('SoundHelix-Song-1.mp3');



const songs = [
    {
        id:'1',
        songName:`Ride it <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgaGhwaGhocHBoaGh4aGhwaGhocGhocIS4lHCErIRoYJjgmKy8xNTc1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAACAQIEAwUHAAULBAMBAAABAgADEQQSITEFQVEiYXGBkQYTMqGxwfBCUnLR4QcUIzM0YoKSorLxQ3Oz0hZjwhX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAgIDAAMBAAAAAAAAAQIRAyESMUFRBCIyYXGBE//aAAwDAQACEQMRAD8A6IVtCr4hEUu7qijdmIUC+2pi5Ue1zUhhmNZGdAy6K2Vr3sCD5n1nJJ26KuUNwCCCDqCNiD0MIrISYulRwyVGOSmtNLA3JAKjKo5sdhKL/wCaE3ZMLWZP1/DrZSP9UrxJrCICJA4JxiliUz0ydLBlbRlJ2uBpY8iNIngvGFxPvMqFfdvkNyDc66i3hDRLArDAldxDjC0q9GgUJNU6MCLDW2sVX4pZ2p06L1WS2fJ7sKhYXVSzuoLWsbC+hho1kBG3EjYXF1HbK+GemLHtM9Ijwsjk/KJ4jxFaZVArPUe5WmgBYgbsbkBVH6xIELCiYoPT7w01lO/E3QZquHdE5upSoF73VTmA7wDaXCVFyZwwy2zZrjLltfNfa1tbxSU6VaHKmlxh6gzUcO7pycslMOOtNXOYjvIAMl8P4glXMAGR0ID03FnQnUXAJBB5MCQesrSUu0IyDjOJZHFJEepUsGKqVARTcBqjsQFvY2GpNtojDcTu4pVabUnYEpmKsj21OR1NiQNcpsbawoWOWItH2EQBCwSgRpEiLMrOI8dw9DSpVVTYHLu1joLAbwpxYgQ7zD4/+UigrAUqbuNbsTlHdYb98rx/KWbm9AWv2bMb279N94av0OnSLQGYGj/KXTNg1B12ucwIGup2udJd4b20wT/9XJ3OCvpyMLuBoliYjBYlKiZ6bq6nmrBh8o8RD4AQAQ1EO0NEFoIq0EYRgsz/ALef2N/20/3TQzPe3v8AY3/bT/dIx9qVHtOM1Ph1NjZHyZ/8tNd+XZd5uEQKAqgKF0AGgAGwA5SlxXB1xODp02OUimjI1r5WCAajmCCQRKynT4si+6BpMBoKpIJA2B11PiUJ8ZXsg4WgTitZEGVWp5io0FyKbE28ST5mOewe+K/73/tHuG8Fq08Z75yrJ7lEL5u0zqlNSxB11KsZX8XwdfAvVxOGZDSqEGoja2LNpppcZmNiCCM0P8BK9o/7fgvH/wDct3wdanUepQyOtQhnpuWSzhQmZHUG1wq6FTqNxKfgHDK1esmOxLL8ANJF2AIOUkch2ibam512mhxGJrhiEoK6jZjVCk/4cht6xg1Q4r21p1qb0ne4Qkq9NyBcqtRTvYHRgDpIOHxdOm+KrVWs3vlpDS7ZVRGpoijViSzNYb3kmph69Z6fvESmlNxUsHLuzKDlHwgKLm5OpNrRzFYF1qmvQyFmAFSm5IV8oIV1YA5HAJF7EEaHa8AY/m1bE/12ajR5UlNqjj/7XHwD+4vmeUa4tUpvh/dIMtMYinh3AGVQudA6i3LXL5mS6lfFOMqUVpE6Go7q4XvVEvnPS5Ajq8Hp/wA3OGOYoQbsT2yxOYvf9fN2r9YQlgF5DlKvGplxWHcbutWm3eoX3i38GXT9owqNbFIMj0lrEaCojrTzDq6P8J65biGuFrPUoVKmTsPUZlUmyK9MoqgkAub6k2G+2kCFwVbvimO5xBF+5aVIKPLX1he0AslJua4ihY9MzhD6hmHnJPDMIyNXLW/pKzVFsf0SlNRfobqYXF8K1RECWutWk5ubdlHV287Aw+TTyZD4jxFMOjVarZUXzJJ2AHMw+KY9KFNqtQ2VR5k8gBzJnGfaHjtXFPnckIPgQE5VH3bvhJbSWvtB7eV6xZKVkpGwGn9IR3tfS/QesyLsWJJNyfWKC6coQE0kkIQpXivc6R1L89pLpAEZuXMafhhbpUxlVrIRCyyyZCbkeBPTpGlpnYDzMNjxHwri9fDNmouUJIJGhDW2DA7idL9mPbpMQRTrhadTkR8Ddwv8J20ubzl7UtTp9ohkK2NvOKyUTc9vQqai45xdpzP2H9r3Drh8QwKNfK7GxU6mzEnUHYTpYMj/AGLCvWCFeCPZGQJk8fwDFYlyteugw4qFlRB2stzlBso1ym1yTbvmthiRLpRKIAAALAaAdANol6iggFgC2gBIBJ7hzjlpmOPcPLnGMaZc/wA1QUjkLHOPfMQht8V8h012hIGgWojAkOpF7XBBF9rX63I0ld7R4Jq+HeihXO2Q9o2AAdW1sCRop5Sr4jw0q9QUaRCCnhnyotgzUq5dgORcIu2+0n8IrCtXq4hAwptTporMpXMUaoWsDrYZwL9b9Ia12abw1RRo0aTsgZaaJ8QsWVQDlva8mmoBe5AsLnXYdT0Gh9Jm8VRRa1c4jDvW95lFMrTNQZAgBpggH3ZD5jrYdoG/SDVwtZKdSm6O71sHTpKVUuPeKKqlXcaLbOvaawOpvHITaZxtcXtffl18O+FSqKwurBh1Ugj1EyONR62d1pVQhp4akwZGVmtXvVXKRcqEY3O1r6y6wWEFPFVciZEalSPZXKhqBqoNraZsuS/daGiWpqKL3YaWvqNL7X6coeca6jTU6jQdT0mU4yrg4pBSqO1Y0Xp5ELKQi0w93HZUjIdCRuLbwYym1Z6lYUqjUTUw5emyMrulMPnsjWLAM6GxHayEC8Y01SVkK5g6lb2zBgRfa1xp0is4va4vva+tutvIzH4yhnNVsPQdUanScr7s0870q6OSEYDtZAwFwCbeEtuFV/fYiriEVhTNOnTVmUoWZHqF7BtbDMBfrfpALwQ7RIlJ7Y8Y/m2GdwbOwyU7frMN/IXPlCE597fceNesaSEe6pEgWNwz7M1+7UDz6zM5eWkRQpky1w2EvNN6hzHavFLxg/m80uFwa5gzi45jqO6SOJ8GAGen8B3527pneSS6aTiutsmKFtbG3h94oITYgd3dLc4EWvljT4Q31sANgL387/aO5F4mMKgvsd9vAXv/AM9Y/hsOCTm5m1uZ13/NYaowBvzPyPIfPWSKFMLlzGxtc6E5bX28dPWTauTSJicKdTYbXAG3zkN6fY1N72+gOt+X8ZdMlgWYW7RA9F1v33MrsUvYW1gLWuulxvr6x42llIqHQjw9Z1T+T72iNVDh6jEugupJ1Zb7dSRecxxHfHOHYs0aqVFJDIwNwBe3ge6/PnLs3GU6unfrwTMf/NMP1P8Ap/8AaCZ7X4VorRSmEpgt0i0kcEImFrFsaHGMHhUpoES4Vb2ub7ksdfEmPkws0AVBE3gBjBUEImIcwBQaKvGEPOLLQlFLzRnB4ZaaBE0UFjqb6sxY6+JMVmhNUA1JAHUm0exo9ecq/lF4n77Eiip7FHQ66F2AJPfYWHrOhcX4mtCg9bQ5V7I/WYmyj1InIaVIsxZjdmJYk82OpPqZUvyJNjw+G0vaX2AoC20bpUtNvD9359pYYVdQJGWTbHHSxwWEDAltuUlDBlblNQd1O0ewyWAElKJz29t1FiOGg3Zf8vTyEgHBnkCbeU1xpA684Dg1blHMr6TZGQ/mPNgAPt0HXx+saPDwTdrm5JI5DbL9hNhieG3AsLAHl+eP5aRn4eNRt+DT15zfHHpjlkytfClmbNva/cNbXt3XP4ZUYukFCiwsCRfxsdRzFprsZSs7aacr9DoB56GVOPpm+U8t7agb6/P5x+i9svi0G/d6b6ECQA5BvLLiNPUnTflffW/2lcwmuPpll7LzD9WCF7s93qP3wSi29BCGsAgnPFBaC0F4kNADiWMGaETEAvDvEXiS0DKLRJaIZ4gtFsHM8BeMF4lngEjNMjj+LvUxYooFKAkNe+w+I6bdPSaUvMjXxVLC1XYgs9QnUbqh2A776+knJ0fjybt13rpXe0GJcf0AP9Gz5+ejKrAr4HQ+K3kPDU7jaW1eolSkXS+h/SFjpv8AI7wcPwlxc6Dl333jmWsTyx/Yimh0yg37hLbA4axzHeGigbSbSmVy2rx0kUhH0EaQyQhiFOIJJpJIyyTSaXj7Rl6S0tI+IwgOq6fn/MdV4YadEvTCxQcRwTNc23NjyOwH0F5SVOHva5HLU/nPnN00hYikpvpM8/tpj9OX4/Bm7Bh4EDTu+0pq+FNvL5zpfEOH5hpMvxXhrItyO790rjzlLPD5Y/JBLSw/WMKbsdO2qYakRK84RWcyii0TeAaaRBaFoKMbYwM0SYAq8bZ4C0Yd4qC2eNl42zxs1IbVo6zxDPGWeILw2NJJfSYjj1MfzlHcXRrX6dnQgzXZpR+0GFLoqLqQSfWTle3Rwa7OYgZwSqhVewUDTS+pHdYGPolgANhCwzXAvyUC3TQfxj9pntpfZCrH6DrtcX6XF4w5trMtxjFIzWuVccx948cdpyreoskos5OnGq1Ngc+YA9T6Hums4T7Wq5AbsnoSPkZpeOztnM5bptVp6RQFpFwuKDC4Mkl7xTRWUsNHVeMLF2lS1Nh0mRcQYtjItZpOeXSsMezDtKP2jqXTJzMuHMgYHC+/xK80pnM3TTRR5kfKTwz9lcl1ipP/AOBW/UX0b90OdQuYJ19/bl8p9IRibxRiGMxpjzRDGC8bdoqcKLRp3hM0Zd4jG9QCMvVjTv1jD1dotnIWasberGmcb33jFRzeTtWj7VTAtUXtIxeFmjg0lLU6RipWA+K9+4E+kQjxatz/ADSFm1YXxpdHUXHP16/eOhYmhtJCrIbbRayaSkfCNnAV8gO5ABbyzCaR0kLE4MsNBeOZaEm3O+M1Xzsj5roSpLZST2iVYWUZQVK6a9edhACspF7r9p0f3JuM6K+XQFkBYDubeUfGuDM5zKDfoRp/CdOPLjXPlwWd72h8J4/WoEKxzJ66eM3nDOMCouYGYnh3CWOjr3azTcOwnulsBpvMOWz49t8MbJ21NDFCTUqAzmeM9qGVyqLcAyTg/bkAgOhH0jwxz+mefj9uiONJAxLWlLQ9tKJ+K48ZLo8RSuCUN7bj7+EWcv0MDWPrZUJ57DqSdAB52mh4LgPc0wD8bdpz/e6eA2lbgqSvUTNYlSXC87gWBt0F7+NpohL4cets+bL4CCHBN3Oqkx1M7Ovrb6xecHYg+BmQEWj22mWm/i1V4w7yjTiLrzv46xZ4o36o+cmwvFZu8j1GkI8RPNfQxDY8fqn6xWVWj9Vjc9OUjM9o2+NW3OMNil2v6gyLKcPF4TG8aVwdiD5xL4lF3YX7tfpCQy2aJd7SC3EBbsrfvMjYWnUxdZaCMQDrUYfooNz46gDvM0xxtK2Sbq7wjIUaozWRTYvbcjdVvvb0h4fEh0zhMqk9m5JJA5k+PcNpWe1x/p6OBp3RFVbAchqL957LHXcnxlqQFAVdAoAA7tv3Qzkx6Pj/AG/Yum8l0nlcz2kig8wtdOulkq3jq4eNUXkxHiiLshcPDfDrzh1KkjNW0lSwtWgcKt9BH8ZhgEOmpBiMLcsLybiXFwJUnVtLLe5HKcT7Ov7wgEML662N/AyqqcPdHyOjZtgtrG+w0t2hfpv1nVOI4IPquh3BkTDPWQ5bXA6i48unlLx5teyy4plNxh8fwN6HZe2i5wP0WXTNlPJhfUS39lcAxdXpMyj9JTqCOgmmxXDff2NQC4N1sLW2vLvguCVBcCwGg+5juXndRnqYTaRw7AhMzH42Op7uQ9AJPEMQhNcZMZqMMsrld0cEEEraXPhAYUEl0DtEtDza/eEBzMQJMbcR76SDj65Qo9+wGyv3B7AN5H7wAO0jMZLdLEjnGinMyVREf1jPu+snNS7ozWQ2jkG1bi62UWE2H8muGAoVKxGr1CoP9ymAALkfrFucwPFX1tz2nSfYRgmDQX1zP46sehB+RmuMkm6wztt1FL7VUsvEaL8nQqD3qD/7dTJFZ7EeEvuL8IXEMjPnU02zAqVuT0JI1G3fpI9TgOb9IjzB+wnPy6uW46OK+OOqqXsRHKLW5yaPZ1x8NQHxUj7mLTgTjVnXyBMxuNbTPH7LwzSYhHOChwxrfFr4RrEdi6vp3de+KY0rlEbFYjMwQefhJYw4AFpnsRUBYkGxkzh/FSOy5UjqP3SvHXdX8dL/AAgsYjFNr4mFQxIO0bxNjbre8Lf10iT9igbwAWMQhhu8g6lU1uQBuZbogAAGwEh8OpG2c7nbw/jJwM6uPHU3XHy5buoAhwjBeaMhwQQQDnogY8h+d0Te0EToGBDppm1BBHlEMbA+EVgKdqSfsr9L6wI4aZP59JHxeCzoyG1iLb/nOTQB+GJLa22+cBtAw9FlRFqWLgWJU3BA21Nje1rxSp3fP8tH6puT5eG8jm3f+axHCCNQOfPSIejob9I8iaw+I3CZR8TA/IEmOTdK3TDY58zk8ht950v2SRkw9MNobEgb/Eb7X00tMdwjg+equcdgXY94HLkdSRNpTxWVuumgEnnz8dYq4MPLeS2qJrux8wPkBAjDofWUx9pEO3n1FuRj+G41Tc5QdRv3Tn3G1wv0uM/PX1hIb7g2hUqisBaSUIsRCTaL0cAtYiV/HaAdC3NRe/dz+X0k1H5RvGUQ6OjfCylT4EWP1mkqZ7c+xeFcHMNR3azO4jH1A9lBBvL+vwCqql8O7MVPaS5Dafqnn4bw8PxIBV99hizj9Ihl8zpvLnXtteO31SODU8SbXfKD0FzbuvtNiuHC7b21O5Nupldw/FUqozU+yR8S31HhJ61vpMs5L3E7yl1Rs9pI4fh/eHOfgB/zEcvDr6SNgcKazZjcUwdTsXPRe7qfId2jVQoAAAAFgBsANrR8fHvus+Tk11C0aOyOh1j150RzUGhAwrwRAqCFeCAc7tbWKB6/PaJJhk2g2FWbstbofpHMMwyIL30X6CMYhrK3gfpDwzHIm/wj1t/zAJitt9f+Yld/+NogvfaErfm3f5wBTjXS2v7r9Ixl6mOXHT8tG1389/SAPYVLtz+ccXDZy7cgRTG+1iX0Hfl3FtD5DCAKCx5X+UucMtOlSRajop3bMyizkuzDU20vbltz2mnFO2XJelRTwwRLbFrDlsTfS2n0lZxauE7WcAjbX7QvaPFkKrI1wGzA735jU6xurWStQ1swtcX3Hy0nHyTyztv29DhmsJIl+zns3SfDipVTM1RmcEOwsp2BZG00GY5hpm5GDifAcoQUiqKGAYE2ZhzOa5DMQGNuQtMg3E8SlMUqdV1RCSFWwIu2c2YDNvra8rqTNVYhmLXuSWJY3PO5M6tY3H047lnjn7dk4UAygBhcDYdOWksiLTKeyVEU8NTCjU3LEczc7/nKacVMw+85pJOm2W72BbnHc0jKQDa/54x5YksUeOpRxFSlUJUq7ANy1Nx8jLynx0ZdCrab76TNe1nATUxJdLAOqlvEdm/+kSHhuBFBfP43OnpNZZJ1Wkzt/qLriAR71dVqDZlNri97NyYR3DOWUXvY7359ZAwOELm5JyX0G1/4S7KadO7whMd91nnyfTTUXBVSLAWFgNgOgjt5lMNxJ6T5bZkK3PcdR2e/aaLBYxKgujA23H6Q8RylsLEgNrHiY0iaxxoRNHaFeFeGPKAHmggtBDsOfAW3MSI377wiw8GxGJvkbwMLDHsJv8I9LdInEnsHrYxvDt2F1HwiBJWb8vEl5HZ/rCZ9vCASM/1+31hK1zGQ/wB/pAj6jxHdAbXHD6IqVKdPTLfO/wCwmuo6E5QfGaStw6ne600Ddci330va50JI3GjHpKr2Lo3FSudLn3acuylixGnN7D/AOs07pcde7futse8eU3wmowzu65x7ZYe2YjbQgdNLEbnUEG/feZfhRfK4X4QL899TpbuB+U6lx/gK4lR22RgLXADXHIFWbxHLXN5ZjiPBkw9LKhuRqWOW7Hkfitba2mxHfM//AB3ld+nTPyJMJr3GVwCE11U9nRyb9QrEcxztv1kXDouZ2UWFyF8BoLx4Yg9ooNcrLpbQMpTXTaxt/hESMOUQkiyi1zuRfUEgbCPKSTUZy3LK5ZNr7L182GQnkXHo7fwmjw9WY32MrKaNRAb5Xv5Mot81aaXDVRe048+sq6sf2xWzrz18ooDSJptcRRWOs2c9qgyZHUXNyh89Rv4GUWd2HbIt0/eec1vG6Gek45jtDxG/yvMrSSaYSaLK1a8O+AW7x37yYPlaRcANCO+48x+8SWG6/mk0Z0xiR2T0tKDB4pkqZlJBHMb/AJ3S8xgBXW487fWVVHBqW3J8/HoIqeLdcN4irquawJHkT9jLEzFYbCqLWZgZYUsRUQaMTbl8Q+esW03GfDSQ5R0eOi9nQj+8uo8wdZb4fEo4ujBh3fccobTcbDt4IV4I9k5fY3iEqG/dFudJGqGw6waVJ97mGsaov2B6fOR0qQUX0OuxP7/3wG0on7xLPG2YctoRYwGz+cyPiMRludNAT6RWe2vjIRT3lRKZ2qOiHwZwG+RMchWusez2GNLDUUtYimpbQjtuMzbkfpFh5rLHMOt/nyvfS99Pmo6xlDryv3Ze4E9kG2uRv8XdHM3P633vp8RH6Vxt+ks6HOOop6fX7zKe1jEqKakZ20ADXtzJIB0ABPovdLji/EUoozk5QByA2sduydbD1RRzmNoVne9Z/jqa207K7qo2vbSLLLxi+PHyqoxvBwijISf1ieZ62knC01zdofEmoPdcHytaWdlYWO95W8Xcot0uWysijq7sgX6TD26bqQn2SwIRKji9nZgOmVGIB9S2+suPekNLduHJh6CJpdQqk8ybWN+++uv62h5SorADWY/kzWX/ABp+NfLFeYStcCWC6zO4CrbnL/CuDMsbs88dUmuv5ymXeiFYra2ptNjUEo+J4S/bX4huOv8AGa43xqL3FbhWs3jp58pJJ8frI28qk4diLnNjKluQVVBtfrtNmVW2NQlNL7jX5EfONYQ6C4jVDDsoN3d76Xdif9Pw/KPISNf4RUzxqW2tHaWIN5CzW3PPr+coBUHWAWrMDa4B8dYVKmoN1BB6qzD7yPQufD+MeL27C6toWI/RHU956RBYe9f9dv8ANBK//E/p/CCGgyzvcyPUAJ6RdVrSKzxgKiHu+kao3BN+cU76xKPqL98aT+bQRat+fKJ35Qvy38IAp2AH50iPZdi+Po22Vmc32GVGYX7s2WRMZVsJP/k+W+KZtdKTnQE37SX2B5Xt32l4xGVdVR76b9xN+osbFv7yNpuD0ETi8UEQsb2t+yTp4rYlb+BBPKMVKuUdo9xvy2Untvt8Dbcjza0w3tT7QXuiEeRTxOwPPON+bdRNbWUm0TjfFDia4S/YUlm5Xykf3joWF/Puk2hVvM5whDYub3c/6Rt66nzmgopz/dMMruurCaxWL09dJHwzK+JRXICUQ1eoTewFOwTUbdtkPPYw6ley5j0J6yq4RmqM7H4GZSdPiyfCP2QSWt1t0EMerujLuajQ43FNiHzkEIt8im405MV5GwGnKVGPDpqpunfuJbqIlkv4GRnPL2eGXh6VfDsU99ATNRg8TcX585n8hQ2X4Tt3d0tcM1xcb85zWeNdVsym17hsUDpHWogjSVFFbEn875Y4aoSLE8pUu+qxs13FTxHDBGuOfLvkB1uOk0mLoh1I+nIzH8Y4iMOQhUtUb4UA35BiTsJrjfhGU+UpW0sRqPHaJeqNfz7xjDU3y9s5nbVrbA9F7hFrhjreWkipc6iP4ejrt6/ndJVKlpr6eskon5pAto+Jrimha1zso6sx0G232Ebw6FELMbublj1J5+EaqH3le36NIDzdt/RSPUyXXaEHwq/514+sEkZF6n88oJQUGIkM/nrBBFDR3/PWLX4vL7QQRpSoawQRBXY+Wf8AJ9/aW/7Y/wDJTggmmDPJrf8ApD9hP/Hh5z3jfxHw+0EE0yRisMH8CfsL/tEvKXwekEE56656Mcb/AKp/B/vF+z39WPL6mCCP4Sthy/OcHI+X3ggkg3ith+19jHeHbnxggnPye3Rx/wArVNh5/WP0eflBBFE1IX4ZkfaP+tw/jU/2LCgl4/0V/mpdHl+cjHW+H874IJsxPLt+d0C8/EfSHBAldwver/3H/wB0eq/uggjikOCCCMP/2Q=="
    },
    {
        id:'2',
        songName:`Jaysean-Fade <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://i.pinimg.com/originals/5c/89/de/5c89de5b52165f998c117167eb380278.jpg"
    },
    {
        id:'3',
        songName:`Price of Love <br>
        <div class="subtitle">Bryan Ferry</div>`,
        poster: "https://img.discogs.com/u_3lrSXwSie9sTJpwZR7ZZJEX7I=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5896870-1536214880-3617.jpeg.jpg"
    },
    {
        id:'4',
        songName:`Bad News <br>
        <div class="subtitle">Eric Clapton</div>`,
        poster: "https://muzikercdn.com/uploads/products/5646/564658/main_b36643ba.jpg"
    },
    {
        id:'5',
        songName:`Comic Strip <br>
        <div class="subtitle">Andy Gibb</div>`,
        poster: "https://64.media.tumblr.com/1d7e2b8a3aaef0ca5b8408a7f3ed637f/e50bda80f8986c0e-e4/s1280x1920/427a4f1dfa092734a6552d5fd8edf17ee801a94c.jpg"
    },
    {
        id:'6',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jeffrey Damer</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'7',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'8',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'9',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'10',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'11',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'12',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },
    {
        id:'13',
        songName:`You All Hate Me <br>
        <div class="subtitle">Jaysean</div>`,
        poster: "https://th.bing.com/th/id/OIP.vGK8teTgy6efk59YHUm07wAAAA?pid=ImgDet&w=337&h=270&rs=1"
    },

]
Array.from(document.getElementsByClassName('songitem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})
 let masterPlay = document.getElementById('masterPlay');
 let wave = document.getElementsByClassName('wave')[0];

 masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
 })
