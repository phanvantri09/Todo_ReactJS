<div>
    @foreach($collection as $key => $item)
        <select name="" id="collection{{$key}}" onchange="handleChangeSelect(this.value)">
        <!-- đổ ra option -->
            @foreach($item as $prkey => $pro)
                <option value="{{$prkey}}">{{$pro}}</option>
            @endforeach
        </select>

        <!-- đổ ra giao diện -->
        <!-- nên dùng ajax để tối ưu performent -->
        @foreach($item as $keypro => $pro)
            <div id="product{{$keypro}}">
                <img src="#" alt="">
            </div>
        @endforeach

        <script>
            // xử lí khi chọn option
            // Xử lí performent ajax
            function handleChangeSelect{{$key}}(value){
                change display 
            }
        </script>
    @endforeach
</div>